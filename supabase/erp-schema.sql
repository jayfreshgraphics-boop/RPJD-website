-- ============================================================================
-- NSE Ikeja RPJD — Engineering Resource Portal (ERP) backend
-- Hardened version of the vendor starter schema (RLS enabled, admin-gated).
-- Run in Supabase → SQL Editor. Safe to re-run.
--
-- Tables are prefixed erp_ so they can share a project with the NIBCAP tables.
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- tables ----
create table if not exists public.erp_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text,
  role text not null default 'applicant'
    check (role in ('member','applicant','employer','administrator')),
  created_at timestamptz not null default now()
);

create table if not exists public.erp_opportunities (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('job','internship','contract')),
  title text not null,
  organization text not null,
  location text,
  description text not null default '',
  application_url text,
  closing_at timestamptz,
  status text not null default 'draft'
    check (status in ('draft','published','closed')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.erp_resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  summary text not null default '',
  resource_url text,
  status text not null default 'draft'
    check (status in ('draft','published','archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.erp_applications (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid not null references public.erp_opportunities(id) on delete cascade,
  applicant_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'submitted'
    check (status in ('submitted','in_review','shortlisted','declined','withdrawn')),
  created_at timestamptz not null default now(),
  unique (opportunity_id, applicant_id)
);

create table if not exists public.erp_organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_email text,
  organization_type text not null
    check (organization_type in ('employer','partner','sponsor')),
  status text not null default 'pending'
    check (status in ('pending','approved','inactive')),
  created_at timestamptz not null default now()
);

create table if not exists public.erp_engagements (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.erp_organizations(id) on delete set null,
  kind text not null check (kind in ('partnership','sponsorship','employer_enquiry')),
  subject text not null,
  message text not null default '',
  status text not null default 'new'
    check (status in ('new','reviewing','responded','closed')),
  created_at timestamptz not null default now()
);

-- Newsletter subscribers: public may insert, nobody public may read.
create table if not exists public.erp_newsletter (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'erp-site',
  created_at timestamptz not null default now()
);

-- Who may administer the ERP. Populate after creating users in Authentication.
create table if not exists public.erp_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  note text,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------- helpers ------
-- SECURITY DEFINER so the check itself is not blocked by RLS on erp_admins.
create or replace function public.erp_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.erp_admins a where a.user_id = auth.uid()
  );
$$;

create or replace function public.erp_my_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.erp_profiles where id = auth.uid();
$$;

revoke all on function public.erp_is_admin() from public;
revoke all on function public.erp_my_role() from public;
grant execute on function public.erp_is_admin() to anon, authenticated;
grant execute on function public.erp_my_role() to authenticated;

-- Auto-create a profile row whenever an account is created.
create or replace function public.erp_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.erp_profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists erp_on_auth_user_created on auth.users;
create trigger erp_on_auth_user_created
  after insert on auth.users
  for each row execute function public.erp_handle_new_user();

-- Backfill profiles for accounts that already exist.
insert into public.erp_profiles (id, email)
select u.id, u.email from auth.users u
on conflict (id) do nothing;

-- ------------------------------------------------------------------ RLS -----
alter table public.erp_profiles      enable row level security;
alter table public.erp_opportunities enable row level security;
alter table public.erp_resources     enable row level security;
alter table public.erp_applications  enable row level security;
alter table public.erp_organizations enable row level security;
alter table public.erp_engagements   enable row level security;
alter table public.erp_newsletter    enable row level security;
alter table public.erp_admins        enable row level security;

-- erp_profiles: read/update your own row; admins read all. Role cannot be
-- self-escalated because the WITH CHECK pins it to the stored value.
drop policy if exists erp_profiles_select on public.erp_profiles;
create policy erp_profiles_select on public.erp_profiles
  for select using (id = auth.uid() or public.erp_is_admin());

drop policy if exists erp_profiles_insert on public.erp_profiles;
create policy erp_profiles_insert on public.erp_profiles
  for insert with check (id = auth.uid());

drop policy if exists erp_profiles_update on public.erp_profiles;
create policy erp_profiles_update on public.erp_profiles
  for update using (id = auth.uid())
  with check (id = auth.uid() and role = public.erp_my_role());

-- erp_opportunities: published rows are public; admins manage everything.
drop policy if exists erp_opportunities_read on public.erp_opportunities;
create policy erp_opportunities_read on public.erp_opportunities
  for select using (status = 'published' or public.erp_is_admin());

drop policy if exists erp_opportunities_admin on public.erp_opportunities;
create policy erp_opportunities_admin on public.erp_opportunities
  for all using (public.erp_is_admin()) with check (public.erp_is_admin());

-- erp_resources: same shape as opportunities.
drop policy if exists erp_resources_read on public.erp_resources;
create policy erp_resources_read on public.erp_resources
  for select using (status = 'published' or public.erp_is_admin());

drop policy if exists erp_resources_admin on public.erp_resources;
create policy erp_resources_admin on public.erp_resources
  for all using (public.erp_is_admin()) with check (public.erp_is_admin());

-- erp_applications: applicants see and create their own; admins see all.
drop policy if exists erp_applications_read on public.erp_applications;
create policy erp_applications_read on public.erp_applications
  for select using (applicant_id = auth.uid() or public.erp_is_admin());

drop policy if exists erp_applications_insert on public.erp_applications;
create policy erp_applications_insert on public.erp_applications
  for insert with check (applicant_id = auth.uid());

drop policy if exists erp_applications_update on public.erp_applications;
create policy erp_applications_update on public.erp_applications
  for update using (applicant_id = auth.uid() or public.erp_is_admin())
  with check (applicant_id = auth.uid() or public.erp_is_admin());

-- erp_organizations / erp_engagements: administrator-only.
drop policy if exists erp_organizations_admin on public.erp_organizations;
create policy erp_organizations_admin on public.erp_organizations
  for all using (public.erp_is_admin()) with check (public.erp_is_admin());

drop policy if exists erp_engagements_admin on public.erp_engagements;
create policy erp_engagements_admin on public.erp_engagements
  for all using (public.erp_is_admin()) with check (public.erp_is_admin());

-- erp_newsletter: anyone may subscribe; only admins may read the list.
drop policy if exists erp_newsletter_insert on public.erp_newsletter;
create policy erp_newsletter_insert on public.erp_newsletter
  for insert to anon, authenticated with check (true);

drop policy if exists erp_newsletter_admin_read on public.erp_newsletter;
create policy erp_newsletter_admin_read on public.erp_newsletter
  for select using (public.erp_is_admin());

-- erp_admins: no policies at all, so no client can read or write it.
-- Membership is managed from the SQL editor only.

-- --------------------------------------------------------------- grants -----
grant usage on schema public to anon, authenticated;
grant select on public.erp_opportunities, public.erp_resources to anon, authenticated;
grant select, insert, update on public.erp_profiles to authenticated;
grant select, insert, update on public.erp_applications to authenticated;
grant insert on public.erp_newsletter to anon, authenticated;
grant select, insert, update, delete on
  public.erp_opportunities, public.erp_resources, public.erp_organizations,
  public.erp_engagements, public.erp_newsletter to authenticated;

-- ============================================================================
-- AFTER RUNNING THIS:
-- 1. Authentication → Users → Add user, create the branch administrator
--    (tick "Auto Confirm User").
-- 2. Copy that user's UUID and run:
--      insert into public.erp_admins (user_id, note)
--      values ('<paste-uuid>', 'RPJD administrator')
--      on conflict (user_id) do nothing;
-- 3. Sign in at admin.html with that account.
-- ============================================================================

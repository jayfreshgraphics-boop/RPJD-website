RPJD Website Preview
====================

Extract this ZIP, then open index.html in Chrome, Edge, Firefox, Safari, or
another modern browser. Every page is self-contained: all images, logos and
portraits are embedded in the HTML, so there is no assets folder to keep
alongside them. The only external files are config.js (Supabase settings) and
the supabase folder (database setup script).

Pages
-----
index.html         Main RPJD homepage
editorial.html     Editorial page
career-board.html  Engineering Resource Portal (ERP) homepage
NIBCAP.html        NIBCAP conference page
admin.html         ERP administration dashboard
nibcap-admin.html  NIBCAP announcements admin

ERP backend setup (Supabase)
----------------------------
config.js already points at the branch Supabase project. Two steps remain,
and both are done by an administrator, once:

1. In the Supabase dashboard open SQL Editor, paste the whole of
   supabase/erp-schema.sql and run it. It creates the erp_ tables with row
   level security already enabled, so it is safe to re-run.

2. In Authentication > Users, add the branch administrator account and tick
   "Auto Confirm User". Copy that user's UUID, then run:

     insert into public.erp_admins (user_id, note)
     values ('<paste-uuid>', 'RPJD administrator')
     on conflict (user_id) do nothing;

Until step 2 is done, admin.html sign-in will say the account is not an ERP
administrator. Members and applicants can only sign in with accounts the
secretariat creates; there is no public self-registration.

What is live once the schema is applied
---------------------------------------
- Member/applicant sign-in on career-board.html
- Newsletter subscriptions (public may subscribe, only admins may read)
- Live counts on admin.html for administrators

Never put a Supabase service_role key in these files. Only the project URL
and the public anon key belong in config.js.

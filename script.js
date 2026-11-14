const units = [
  {
    name: 'Engineering Resource Portal & Partnerships Unit', lead: 'Godwin-Jnr Orokpo Okoko',
    overview: 'Creates the connections and digital pathways that help engineers find professional opportunities.',
    responsibility: 'Manages and develops the Engineering Resource Portal; sources jobs, internships and contracts; engages employers; builds strategic partnerships; secures sponsorships; and improves the digital platforms and processes that connect members with opportunities.',
    members: ['Felix Oyeniyi','Gideon Aluko','Abubakar Suleiman Sani','Zubair Ibrahim Adam','Bolarinwa Akinsanya','Oluwasomidotun Elijah Adepitan','Olamide Oluwafemi Sholesi','Lawal Abdulmujeeb Adeleke','Micah Jonathan']
  },
  {
    name: 'NIBAAMS Mentorship Unit', lead: 'Joy Rereloluwa Ogunmodede',
    overview: 'Builds meaningful mentor–mentee relationships and supports learning through every stage of the programme.',
    responsibility: 'Manages NIBAAMS, coordinates mentor–mentee pairing and engagement, monitors participation and progress, supports capacity building, tracks outcomes, documents success stories, and organises assessment and graduation activities.',
    members: ['Caleb Damilola Akintola','Olonade Julius Olabisi','Tolulope Victor Adesanya','Joseph Obika','Emmanuel Anyangbeso']
  },
  {
    name: 'NIBCAP Career Acceleration Unit', lead: 'Seidu Boluwatife Haishat',
    overview: 'Equips engineers with practical, professional and technical capabilities for their next career step.',
    responsibility: 'Develops and delivers NIBCAP programmes in project management for engineers, professional and technical skills, workplace readiness, entrepreneurship, practical projects and assessments to strengthen career prospects and capabilities.',
    members: ['Ayomide Emmanuel Gbadebo','Greatness Iteoluwakiishi Ademuyiwa','Abdulmajeed Ismail Adekunle','Egbezor Chimezubenim Wisdom','Momodu Hafizah Osi-ikhuemi']
  },
  {
    name: 'Editorial, Publications & Content Unit', lead: 'Henry Oghenekeno Richard',
    overview: 'Shares the ideas, achievements and useful career knowledge of the RPJD community.',
    responsibility: 'Leads editorial and publication work, including the RPJD Spotlight Bulletin, content planning, research, writing, editing, proofreading, programme and success stories, career development content, and publication-ready reports and archives.',
    members: ['Mfonobong Daniel','Elizabeth Modupeoluwa Chanbang']
  },
  {
    name: 'Digital Technology & Media Unit', lead: 'Shammah Oluwasegun Eesuola',
    overview: 'Provides the creative, technical and digital support that keeps RPJD’s activities connected.',
    responsibility: 'Provides design and media support through graphics, flyers, certificates, video, photography, digital communications and social media; maintains online forms, databases, dashboards, virtual event support, digital archives and programme technology systems.',
    members: ['David Oluwafemi Adeyemi','Sonola Oluwakorede Emmanuel','Julius Ayomide Isaac','Jesufemi Samuel','Bolaji Ayobami Olanrewaju']
  },
  {
    name: 'Career Outreach & Job Summit Unit', lead: 'Ajala Segun',
    overview: 'Brings students, graduates, members and employers together around real career possibilities.',
    responsibility: 'Organises career fairs, job summits, NYSC camp and graduate outreach, university engagement, employer participation and international day programmes; supports employability, participant mobilisation and follow-up that connect people with employers and opportunities.',
    members: ['Aniel Oluwatobi David','Blessing Obed','Cookeygam Caleb Joshua','Jonathan Ajiboye','Bolaji Eragbe Onwumah','Akinfolarin Michael Olamide']
  },
  {
    name: 'Executive Secretariat', lead: 'Chairman-led',
    overview: 'Keeps RPJD’s committee work organised, documented and moving forward.',
    responsibility: 'Coordinates committee administration, official correspondence, meetings, minutes and action tracking; maintains governance documents and records, prepares committee-level reports, and consolidates unit updates.',
    members: ['Joy Rereloluwa Ogunmodede','Precious Oke Taga','Sunday Odunayo Olaseni']
  },
  {
    name: 'Special Project Teams', lead: 'Project lead assigned as needed', coordinator: 'Precious Oke Taga',
    overview: 'A flexible cross-unit team that gives time-bound projects and events the people power to succeed.',
    responsibility: 'Supports projects, physical programmes and events with logistics, registration, ushering, venue preparation, participant coordination, technical demonstrations, mentorship activities, career events and delivery support.',
    members: ['Ayorinde Dorcas Ikeoluwa','Rejoice Alikwe','Igbuan Ifidon','Abdulwakeel Olajide Abodunrin','Daniel Dambo','Eyowan Umoren','Darwang Johnpaul','Gabriel Ugian','Uduak Godwin Udoh','Dada Stephen','Akinlolu Akinkunmi Abiola','Muhibat Akinremi','Dosumu, Faith Esther','Samuel Olanrewaju Adeshina','Olomu Peace','Okereke Caleb Ikemefula','Umeh Mmeri Loretta','Favour Ukpe-Young','Abdwahab Adekola','Nimatullah Abiodun Ayinla','Chukwu Victor Nnamdi','Mahmud Olanrewaju Shittu','Bello Ahmad Bolaji','Ajileye Ibukunoluwa','Allgbaaru Luke','Elizabeth Salami','Victor Ifeanyi Oriji','Oluwatobiloba Bakare','Babatunde Olanrewaju Ahmed','Togun Deborah Oluwatobiloba']
  },
  {
    name: 'Branch Secretariat Support Function', lead: 'Memunat Adebola Raji',
    overview: 'Provides additional administrative and reporting support through the Assistant General Secretary’s office.',
    responsibility: 'Supports duties assigned through the Assistant General Secretary’s office according to actual workload and availability. It operates separately from the RPJD Executive Secretariat and does not replace or override the authority of the Branch General Secretary.',
    members: ['Johnson Samuel Aruoture','Ifeoluwa Asokere','Elizabeth Oluwajomiloju Abereoje','Adejimi Oluwakayode Joseph']
  }
];

const editorialUnit = units.splice(3, 1)[0];
units.unshift(editorialUnit);

const memberPhotos = {
  'Felix Oyeniyi': 'felix-oyeniyi.jpg',
  'Gideon Aluko': 'gideon-aluko.jpeg',
  'Zubair Ibrahim Adam': 'zubair-ibrahim-adam.jpg',
  'Oluwasomidotun Elijah Adepitan': 'oluwasomidotun-adepitan.jpg',
  'Olamide Oluwafemi Sholesi': 'olamide-sholesi.jpeg',
  'Caleb Damilola Akintola': 'caleb-akintola.jpg',
  'Tolulope Victor Adesanya': 'tolulope-adesanya.png',
  'Seidu Boluwatife Haishat': 'seidu-boluwatife.jpg',
  'Ayomide Emmanuel Gbadebo': 'ayomide-gbadebo.jpg',
  'Greatness Iteoluwakiishi Ademuyiwa': 'greatness-ademuyiwa.jpeg',
  'Mfonobong Daniel': 'mfonobong-daniel.jpg',
  'Henry Oghenekeno Richard': 'henry-oghenekeno-richard.jpg',
  'Ajala Segun': 'ajala-segun.jpg',
  'Memunat Adebola Raji': 'memunat-adebola-raji.jpeg',
  'Jonathan Ajiboye': 'jonathan-ajiboye.jpg',
  'Akinfolarin Michael Olamide': 'michael-akinfolarin.jpg',
  'Precious Oke Taga': 'precious-taga.jpg',
  'Sunday Odunayo Olaseni': 'sunday-olaseni.jpg',
  'Ifeoluwa Asokere': 'ifeoluwa-asokere.jpeg',
  'Elizabeth Oluwajomiloju Abereoje': 'elizabeth-abereoje.jpg',
  'Ayorinde Dorcas Ikeoluwa': 'dorcas-ayorinde.jpg',
  'Rejoice Alikwe': 'rejoice-alikwe.jpg',
  'Gabriel Ugian': 'gabriel-ugian.jpg',
  'Dosumu, Faith Esther': 'dosumu-faith.png',
  'Olomu Peace': 'peace-olomu.JPG',
  'Okereke Caleb Ikemefula': 'caleb-ikemefula.jpg',
  'Abdwahab Adekola': 'abdwahab-adekola.jpg',
  'Nimatullah Abiodun Ayinla': 'nimatullah-ayinla.jpg',
  'Chukwu Victor Nnamdi': 'chukwu-victor.png',
  'Ajileye Ibukunoluwa': 'ajileye-ibukunoluwa.jpg',
  'Elizabeth Salami': 'elizabeth-salami.png',
  'Oluwatobiloba Bakare': 'tobi-bakare.jpeg',
  'Babatunde Olanrewaju Ahmed': 'babatunde-olanrewaju.jpg',
};

const unitList = document.querySelector('#unit-list');
const detail = document.querySelector('#unit-detail');

function showUnit(index) {
  const unit = units[index];
  document.querySelectorAll('.unit-tab').forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  const people = [{name:unit.lead, lead:true}, ...unit.members.map(name => ({name, lead:false}))];
  const editorialGallery = index === 0 ? `
    <section class="editorial-gallery" aria-labelledby="editorial-gallery-title">
      <div class="editorial-gallery-heading"><div><span class="program-tag">EDITORIAL DESK</span><h4 id="editorial-gallery-title">Events, stories &amp; media gallery</h4></div><span class="gallery-count">MEMBER CONTRIBUTIONS</span></div>
      <p class="editorial-gallery-copy">A space for RPJD event photos, editorial stories, flyers and news materials. Select files to preview them, then share your contribution with the editorial team for review.</p>
      <a class="editorial-page-link" href="editorial.html">Open publications, blog posts &amp; events gallery <span>↗</span></a>
      <div class="editorial-gallery-grid" id="editorial-gallery-grid"><div class="gallery-empty"><span>✳</span><b>Event photos</b><small>Gallery contributions will appear here after editorial review.</small></div><div class="gallery-empty"><span>▤</span><b>Editorial &amp; news</b><small>Stories, bulletins and RPJD updates.</small></div><div class="gallery-empty"><span>▧</span><b>Flyers &amp; notices</b><small>Programme flyers and event awareness materials.</small></div></div>
      <form class="editorial-submit" id="editorial-submit"><label for="editorial-category">Contribution type</label><select id="editorial-category" name="category"><option>Event photos</option><option>Editorial or success story</option><option>Flyer or announcement</option><option>News material</option></select><label for="editorial-files">Choose photos or materials</label><input id="editorial-files" name="files" type="file" accept="image/*,.pdf,.doc,.docx" multiple><label for="editorial-caption">Caption or short description</label><textarea id="editorial-caption" name="caption" rows="3" placeholder="Add the event name, date or a short description"></textarea><button class="button button-dark" type="submit">Share with the editorial team <span>↗</span></button><p class="editorial-status" id="editorial-status" aria-live="polite">Selected files can be previewed here. RPJD will review contributions before adding them to the public gallery.</p></form>
    </section>` : '';
  detail.innerHTML = `
    <div class="unit-number">UNIT ${String(index + 1).padStart(2, '0')} / 09</div>
    <h3>${unit.name}</h3>
    <p>${unit.overview}</p>
    <div class="unit-responsibility"><b>WHAT THIS UNIT DOES</b><p>${unit.responsibility}</p></div>
    <div class="unit-members-head"><span>UNIT MEMBERS</span><span>${people.length} PEOPLE</span></div>
    <div class="member-grid">${people.map(person => {
      const photo = memberPhotos[person.name];
      const photoPath = photo ? (photo.startsWith('data:') ? photo : `assets/members/${photo}`) : '';
      const initials = person.name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
      return `<span class="member-name${person.lead ? ' lead' : ''}${photo ? ' has-photo' : ''}"><span class="member-avatar">${photo ? `<img src="${photoPath}" alt="" loading="lazy">` : initials}</span><span>${person.name}</span></span>`;
    }).join('')}</div>
    <span class="unit-more">${unit.coordinator ? `Project coordinator: ${unit.coordinator}` : 'Chairman-led unit'}</span>${editorialGallery}`;
  if (index === 0) initializeEditorialGallery();
}

function initializeEditorialGallery() {
  const form = document.querySelector('#editorial-submit');
  if (!form || form.dataset.ready) return;
  form.dataset.ready = 'true';
  const filesInput = form.elements.files;
  const grid = document.querySelector('#editorial-gallery-grid');
  const status = document.querySelector('#editorial-status');
  filesInput.addEventListener('change', () => {
    grid.querySelectorAll('.gallery-preview').forEach(item => item.remove());
    [...filesInput.files].forEach(file => {
      const card = document.createElement('div');
      card.className = 'gallery-preview';
      if (file.type.startsWith('image/')) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        image.alt = file.name;
        card.append(image);
      } else {
        const fileMark = document.createElement('span');
        fileMark.className = 'gallery-file-mark';
        fileMark.textContent = 'PDF';
        card.append(fileMark);
      }
      const name = document.createElement('small');
      name.textContent = file.name;
      card.append(name);
      grid.append(card);
    });
    status.textContent = filesInput.files.length ? `${filesInput.files.length} file(s) ready to preview and share. RPJD reviews contributions before public display.` : 'Select photos or materials to preview them here.';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const files = [...filesInput.files];
    const category = form.elements.category.value;
    const caption = form.elements.caption.value.trim();
    const message = `Hello RPJD Editorial Team, I would like to contribute ${category.toLowerCase()}.${caption ? `\nDescription: ${caption}` : ''}${files.length ? `\nI will attach ${files.length} file(s): ${files.map(file => file.name).join(', ')}` : ''}`;
    if (files.length && navigator.canShare && navigator.share && navigator.canShare({files})) {
      try {
        await navigator.share({title: 'RPJD editorial contribution', text: message, files});
        status.textContent = 'Contribution shared. The editorial team will review it before publication.';
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    status.textContent = files.length ? 'WhatsApp will open with your contribution details. Attach the selected files in the chat before sending.' : 'WhatsApp will open with your contribution message.';
    window.open(`https://wa.me/2348136007917?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}

units.forEach((unit, index) => {
  const tab = document.createElement('button');
  tab.className = 'unit-tab';
  tab.type = 'button';
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', 'unit-detail');
  tab.setAttribute('aria-selected', String(index === 0));
  tab.tabIndex = index === 0 ? 0 : -1;
  tab.innerHTML = `<span class="unit-tab-number">${String(index + 1).padStart(2, '0')}</span><span class="unit-tab-name">${unit.name}</span>`;
  tab.addEventListener('click', () => showUnit(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? units.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : units.length - 1)) % units.length;
    unitList.children[next].focus();
    showUnit(next);
  });
  unitList.append(tab);
});
showUnit(0);

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const dialog = document.querySelector('#chairman-bio');
document.querySelector('[href="#chairman-bio"]').addEventListener('click', event => {
  event.preventDefault();
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
});
dialog.querySelector('.dialog-close').addEventListener('click', () => {
  if (typeof dialog.close === 'function') dialog.close();
  else dialog.removeAttribute('open');
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  if (typeof dialog.close === 'function') dialog.close();
  else dialog.removeAttribute('open');
});


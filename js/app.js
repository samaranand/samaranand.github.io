const content = window.portfolioContent;

const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const nlToBreaks = (value = '') => escapeHtml(value).replaceAll('\n', '<br />');
const tagList = (tags = []) => `<ul class="tags">${tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('')}</ul>`;

const getValue = (path) => path.split('.').reduce((source, key) => source?.[key], content);

const setTextContent = () => {
  document.querySelectorAll('[data-content]').forEach((element) => {
    const value = getValue(element.dataset.content);
    element.innerHTML = nlToBreaks(value);
  });
};

const closeMenu = () => {
  toggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
};

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('is-open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 }) : null;

const observeReveals = () => {
  document.querySelectorAll('.reveal:not(.is-observed)').forEach((element) => {
    element.classList.add('is-observed');
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
      element.classList.add('is-visible');
    }
    if (!observer) {
      element.classList.add('is-visible');
      return;
    }
    observer.observe(element);
  });
};

const renderWork = () => {
  document.querySelector('[data-work-list]').innerHTML = content.work.map((item) => `
    <article class="case-study reveal">
      <div class="case-index">${escapeHtml(item.id)}</div>
      <div class="case-content">
        <p class="case-kicker">${escapeHtml(item.area)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="case-description">${escapeHtml(item.summary)}</p>
        ${tagList(item.tags)}
      </div>
      <dl class="case-outcome">
        ${item.impact.map((line) => `<div><dt>${escapeHtml(line)}</dt></div>`).join('')}
      </dl>
    </article>
  `).join('');

  document.querySelector('[data-work-index]').innerHTML = `
    <p class="eyebrow">More systems I have worked on</p>
    <div class="work-index-grid">
      ${content.workIndex.map((group) => `
        <section>
          <h3>${escapeHtml(group.title)}</h3>
          <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </section>
      `).join('')}
    </div>
  `;
};

const renderExperience = () => {
  document.querySelector('[data-experience-list]').innerHTML = content.experience.map((item) => `
    <article class="role reveal">
      <div class="role-period">${escapeHtml(item.period)}</div>
      <div class="role-title">
        <h3>${escapeHtml(item.role)}</h3>
        <p>${escapeHtml(item.company)} · ${escapeHtml(item.location)}</p>
      </div>
      <p>${escapeHtml(item.summary)}</p>
    </article>
  `).join('');
};

const renderProjects = () => {
  document.querySelector('[data-workshop-list]').innerHTML = content.projects.map((project, index) => {
    const projectUrl = project.link ? escapeHtml(project.link) : null;
    const title = projectUrl
      ? `<a href="${projectUrl}" target="_blank" rel="noopener">${escapeHtml(project.title)} <span aria-hidden="true">↗</span></a>`
      : escapeHtml(project.title);
    const details = project.longerDetails?.length
      ? `<ul class="project-details">${project.longerDetails.map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>`
      : '';
    const media = project.image
      ? `<img src="${escapeHtml(project.image)}" alt="" loading="lazy" />`
      : `<span>${String(index + 1).padStart(2, '0')}</span>`;

    return `
      <article class="workshop-item reveal">
        <div class="workshop-media" aria-hidden="true">${media}</div>
        <div class="workshop-main">
          <div class="workshop-meta">
            <span>${escapeHtml(project.status)}</span>
            <span>${escapeHtml(project.id)}</span>
          </div>
          <h3>${title}</h3>
          <p class="workshop-subtitle">${escapeHtml(project.subtitle)}</p>
          <p>${escapeHtml(project.summary)}</p>
          ${details}
          ${tagList(project.tags)}
        </div>
      </article>
    `;
  }).join('');
};

const renderIdeas = () => {
  document.querySelector('[data-ideas-list]').innerHTML = content.ideas.map((idea) => `
    <div class="idea-line">
      <span>${escapeHtml(idea.status)}</span>
      <p>${escapeHtml(idea.title)}</p>
    </div>
  `).join('');
};

const renderNotes = () => {
  const notesLink = document.querySelector('[data-notes-link]');
  notesLink.href = content.notes.link;
  notesLink.innerHTML = `${escapeHtml(content.notes.label)} <span aria-hidden="true">↗</span>`;

  document.querySelector('[data-notes-list]').innerHTML = content.notes.items.map((item) => `
    <div class="note-line">
      <span>${escapeHtml(item.label)}</span>
      <p>${escapeHtml(item.text)}</p>
    </div>
  `).join('');
};

const renderAbout = () => {
  document.querySelector('[data-about-copy]').innerHTML = content.about.paragraphs
    .map((paragraph, index) => `<p${index === content.about.paragraphs.length - 1 ? ' class="quiet-copy"' : ''}>${escapeHtml(paragraph)}</p>`)
    .join('');
};

const renderNow = () => {
  document.querySelector('[data-current-list]').innerHTML = content.now.map((item) => `
    <div>
      <span>${escapeHtml(item.label)}</span>
      <p>${escapeHtml(item.text)}</p>
    </div>
  `).join('');
};

const renderContact = () => {
  const email = document.querySelector('[data-contact-email]');
  email.href = `mailto:${content.contact.email}`;
  email.innerHTML = `${escapeHtml(content.contact.email)} <span aria-hidden="true">↗</span>`;

  document.querySelector('[data-contact-links]').innerHTML = content.contact.links.map((link) => `
    <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>
  `).join('');
};

setTextContent();
renderWork();
renderExperience();
renderProjects();
renderIdeas();
renderNotes();
renderAbout();
renderNow();
renderContact();
observeReveals();

document.querySelector('[data-year]').textContent = new Date().getFullYear();

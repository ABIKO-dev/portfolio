
// Minimal JS for nav toggle, year, and project filtering
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.getAttribute('aria-hidden') === 'false' || nav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open');
      nav.setAttribute('aria-hidden', String(open));
    });
  }

  // Project filter
  const filter = document.getElementById('project-filter');
  const list = document.getElementById('project-list');
  if (filter && list) {
    filter.addEventListener('change', (e) => {
      const val = e.target.value;
      const cards = list.querySelectorAll('.project-card');
      cards.forEach(card => {
        const type = card.getAttribute('data-type') || 'all';
        if (val === 'all' || type === val) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
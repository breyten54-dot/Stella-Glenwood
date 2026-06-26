document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle?.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks?.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle?.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  // Dynamic copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // Basic form handler
  const form = document.querySelector('.reservation-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your reservation request has been received. We will confirm shortly.');
    form.reset();
  });
});

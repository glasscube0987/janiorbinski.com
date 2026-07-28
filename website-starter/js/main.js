// Mobile menu toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close the menu when a link is chosen (mobile)
menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

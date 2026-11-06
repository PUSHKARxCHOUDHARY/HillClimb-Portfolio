const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const navLinks = [...document.querySelectorAll('nav a')];
const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
// Update the highlighted navigation item as a section comes into view.
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
}), { threshold: 0.42 });
sections.forEach((section) => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();

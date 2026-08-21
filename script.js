// Nav border on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form
// NOTE: Placeholder lang ito for now. Kapag ready na tayo sa backend
// (Vercel serverless function papuntang email service), papalitan natin ito
// ng fetch() call papunta sa /api/contact.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.querySelector('.form-note').textContent = 'Message sent. Thank you!';
  });
}

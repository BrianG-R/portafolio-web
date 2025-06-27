document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1s';
  setTimeout(() => document.body.style.opacity = 1, 100);
});

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
});

window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach((section, i) => {
    setTimeout(() => {
      section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, i * 300);
  });
});
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.body.style.backgroundPosition = `center ${y * 0.3}px`;
});

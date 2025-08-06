const projectCards = document.querySelectorAll('.project');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('show-text');
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

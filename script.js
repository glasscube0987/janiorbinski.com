const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
    backToTopButton.classList.remove('hover')
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Tag overlay paragraphs so mobile captions can style titles and roles separately
document.querySelectorAll('.gallery-item .overlay').forEach((overlay) => {
  let reachedSeparator = false;
  overlay.querySelectorAll('p').forEach((p) => {
    if (p.classList.contains('image-credit')) return;
    if (p.textContent.trim() === '.') {
      p.classList.add('overlay-separator');
      reachedSeparator = true;
    } else {
      p.classList.add(reachedSeparator ? 'overlay-role' : 'overlay-title');
    }
  });
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

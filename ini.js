const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add('nav-dark');
  } else if (scrollposition <= 60) {
    nav.classList.remove('nav-dark');
  }
});

let slideIndex = 0;
showSlide();
function showSlide() {
  let i;
  let slides = document.getElementsByClassName('slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlide, 5000);
}

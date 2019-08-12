// slide show use, reference https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 0;
carousel();

function showSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n){
  var i;
  var slides = document.getElementsByClassName("show_page");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "inline-block";
  dots[slideIndex].className += " active";
}

// auto display
function carousel() {
  var i;
  var slides = document.getElementsByClassName("show_page");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "inline-block";
  dots[slideIndex].className += " active";
  slideIndex++;
  setTimeout(carousel, 9000);
}
// slide show use, reference https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 0;
carousel();

function showSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n){
  var i;
  var x = document.getElementsByClassName("show_page");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (n >= x.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = x.length - 1;
  }
  x[slideIndex].style.display = "table-cell";
}

// auto display
function carousel() {
  var i;
  var x = document.getElementsByClassName("show_page");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (slideIndex >= x.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = x.length - 1;
  }
  x[slideIndex].style.display = "block";
  console.log(slideIndex);
  slideIndex++;
  setTimeout(carousel, 9000);
}
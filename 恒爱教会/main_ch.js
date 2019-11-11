// slideshow use
// reference https: //www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 0;
carousel();


//popup window form
// Get the modal
var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("bar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showSlide(n) {
  displaySlides(slideIndex = n);
}

// slideshow button lead to direct pages
// reference: https: //www.w3schools.com/howto/howto_js_slideshow.asp
function displaySlides(n) {
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
  slides[slideIndex].style.display = "table-cell";
  dots[slideIndex].className += " active";
}

// auto display through pages
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
  slides[slideIndex].style.display = "table-cell";
  // matching pages with corresponding button
  // reference: https: //w3schools.com/howto/howto_js_active_element.asp
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
  slideIndex++;
  setTimeout(carousel, 9000);
}
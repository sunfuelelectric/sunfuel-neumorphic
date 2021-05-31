var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-slides");
  // var controls = document.getElementsByClassName("img-control");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < controls.length; i++) {
  //   controls[i].className = controls[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // controls[slideIndex - 1].className += " active";
  ScrollTrigger.refresh()
}
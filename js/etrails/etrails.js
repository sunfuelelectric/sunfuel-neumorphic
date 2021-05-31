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
var navMenuOpen = false;
function toggleNavMenu() {
  if (!navMenuOpen) {
    $("#content").animate({ left: "100vw" });
    $("#nav-container").animate({ left: 0 });
    document.getElementById("nav-menu-mob").classList.toggle("hamActive");
    navMenuOpen = !navMenuOpen;
  }
  else {
    $("#content").animate({ left: 0 });
    $("#nav-container").animate({ left: "-100vw" });
    document.getElementById("nav-menu-mob").classList.toggle("hamActive");
    navMenuOpen = !navMenuOpen;
  }
}
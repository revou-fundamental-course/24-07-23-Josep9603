// Implement auto slide for banner section
const slides = document.querySelectorAll(".hero");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Implement JavaScript validation for contact form
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Implement form validation here
});

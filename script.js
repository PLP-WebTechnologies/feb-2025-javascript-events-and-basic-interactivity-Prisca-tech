document.getElementById("colorBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#007bff";
  this.textContent = "Color Changed!";
});

document.addEventListener("keydown", function (e) {
  console.log("You pressed: " + e.key);
});

document.getElementById("secretBtn").addEventListener("dblclick", function () {
  alert("🎉 You found the secret action!");
});

// Form validation
document.getElementById("registerForm").addEventListener("submit", function (e) {
  const form = e.target;
  if (!form.checkValidity()) {
    alert("Please fill in all required fields correctly.");
    e.preventDefault(); // Prevent form submission
  }
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
tabBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    tabContents.forEach((c, j) => c.style.display = i === j ? "block" : "none");
  });
});
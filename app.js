
// JavaScript for simple image slideshow
const slides = document.querySelectorAll('.slideshow-container img');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Initial display
showSlide(currentSlide);

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic slideshow
setInterval(nextSlide, 5000); // Change slide every 5 seconds

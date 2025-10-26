document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
  }
  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const alertEl = document.getElementById('contactSuccess');
      if (alertEl) {
        alertEl.classList.remove('d-none');
        contactForm.reset();
        setTimeout(() => alertEl.classList.add('d-none'), 3000);
      }
    });
  }
});

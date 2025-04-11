// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile menu
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      
      // Animate hamburger to X
      const bars = hamburger.querySelectorAll('div');
      bars[0].classList.toggle('rotate-down');
      bars[1].classList.toggle('fade-out');
      bars[2].classList.toggle('rotate-up');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mainNav && mainNav.classList.contains('active') && 
        !mainNav.contains(event.target) && 
        !hamburger.contains(event.target)) {
      mainNav.classList.remove('active');
      
      // Reset hamburger animation
      const bars = hamburger.querySelectorAll('div');
      bars[0].classList.remove('rotate-down');
      bars[1].classList.remove('fade-out');
      bars[2].classList.remove('rotate-up');
    }
  });
  
  // Form validation for contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      let valid = true;
      const inputs = contactForm.querySelectorAll('input, textarea');
      
      inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
          valid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
        
        if (input.type === 'email' && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value)) {
            valid = false;
            input.classList.add('error');
          }
        }
      });
      
      if (!valid) {
        event.preventDefault();
        alert('Please fill in all required fields correctly.');
      }
    });
  }
});

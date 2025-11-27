/* ========================================
   BonsAI Interactions
   Tactile button behaviors
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Get all buttons
  const buttons = document.querySelectorAll('.btn');
  
  // Add tactile press effect to buttons
  buttons.forEach(button => {
    // Handle mouse events
    button.addEventListener('mousedown', function() {
      this.style.transform = 'translateY(2px)';
      this.style.boxShadow = 'var(--shadow-pressed)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
    
    // Handle touch events for mobile
    button.addEventListener('touchstart', function() {
      this.style.transform = 'translateY(2px)';
      this.style.boxShadow = 'var(--shadow-pressed)';
    });
    
    button.addEventListener('touchend', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Smooth scroll for anchor links (instant jump, not smooth)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Instant jump, no smooth scrolling
        targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    });
  });
});

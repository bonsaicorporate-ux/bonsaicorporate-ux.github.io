/* ========================================
   BonsAI Interactions
   Modern tactile behaviors with smooth animations
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  // ===== Enhanced Button Interactions =====
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    // Handle mouse events
    button.addEventListener('mousedown', function () {
      this.style.transform = 'translateY(2px)';
      this.style.boxShadow = 'var(--shadow-pressed)';
    });

    button.addEventListener('mouseup', function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    });

    // Handle touch events for mobile
    button.addEventListener('touchstart', function () {
      this.style.transform = 'translateY(2px)';
      this.style.boxShadow = 'var(--shadow-pressed)';
    });

    button.addEventListener('touchend', function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // ===== Smooth Scroll for Anchor Links =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== Intersection Observer for Scroll Animations =====
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe bento cards for scroll-triggered animations
  const bentoCards = document.querySelectorAll('.bento-card');
  bentoCards.forEach(card => {
    // Reset initial state for scroll-triggered animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    scrollObserver.observe(card);
  });

  // ===== Subtle Parallax Effect for Hero =====
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');

        if (hero && scrolled < window.innerHeight) {
          const parallaxSpeed = 0.5;
          hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
          hero.style.opacity = 1 - (scrolled / 600);
        }

        ticking = false;
      });

      ticking = true;
    }
  });

  // ===== Add Page Load Animation =====
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.4s ease-out';
    document.body.style.opacity = '1';
  }, 100);
});

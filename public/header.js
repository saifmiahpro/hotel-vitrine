// Header navigation script - Mobile menu & smooth scroll
(function() {
  console.log('📱 Header script loaded');

  // Mobile menu toggle with iOS compatibility
  function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      console.log('✅ Menu elements found');
      
      // Use both click and touchstart for iOS compatibility
      const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        mobileMenu.classList.toggle('open');
        console.log('🍔 Menu toggled, open:', mobileMenu.classList.contains('open'));
      };
      
      mobileMenuButton.addEventListener('click', toggleMenu);
      mobileMenuButton.addEventListener('touchstart', toggleMenu, { passive: false });
      
      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
          mobileMenu.classList.remove('open');
        }
      });
    } else {
      console.error('❌ Menu elements not found');
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initMobileMenu();
      initSmoothScroll();
    });
  } else {
    initMobileMenu();
    initSmoothScroll();
  }
})();

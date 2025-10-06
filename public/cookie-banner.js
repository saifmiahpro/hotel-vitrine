// Cookie Consent Banner Script - External file to bypass CSP
(function() {
  console.log('🍪 Cookie banner script loaded (external)');
  
  const COOKIE_CONSENT_KEY = 'hotel-cookie-consent';

  // Check if consent already given
  function getCookieConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent) {
      try {
        return JSON.parse(consent);
      } catch {
        return null;
      }
    }
    return null;
  }

  // Save consent
  function saveCookieConsent(consent) {
    console.log('💾 Saving consent:', consent);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: consent }));
  }

  // Show banner
  function showBanner() {
    console.log('👀 Showing cookie banner');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.visibility = 'visible';
      setTimeout(() => {
        banner.style.transform = 'translateY(0)';
      }, 100);
    }
  }

  // Hide banner
  function hideBanner() {
    console.log('🙈 Hiding cookie banner');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.transform = 'translateY(100%)';
      setTimeout(() => {
        banner.style.visibility = 'hidden';
      }, 500);
    }
  }

  // Accept all cookies
  function acceptAll() {
    const consent = {
      analytics: true,
      maps: true,
      fonts: true,
      timestamp: Date.now()
    };
    saveCookieConsent(consent);
    hideBanner();
  }

  // Reject all cookies
  function rejectAll() {
    const consent = {
      analytics: false,
      maps: false,
      fonts: false,
      timestamp: Date.now()
    };
    saveCookieConsent(consent);
    hideBanner();
  }

  // Initialize
  function init() {
    console.log('🚀 Initializing cookie banner');
    const consent = getCookieConsent();
    console.log('📝 Current consent:', consent);
    
    // Show banner if no consent yet
    if (!consent) {
      console.log('✨ No consent found, showing banner');
      showBanner();
    } else {
      console.log('✅ Consent already given, banner hidden');
    }
    
    // Attach event listeners
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    
    if (acceptBtn) acceptBtn.addEventListener('click', acceptAll);
    if (rejectBtn) rejectBtn.addEventListener('click', rejectAll);
    
    console.log('🔗 Event listeners attached');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for use in other components
  window.getCookieConsent = getCookieConsent;
})();

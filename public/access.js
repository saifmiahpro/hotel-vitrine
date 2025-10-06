// Access page scripts - Google Maps & Address copy
(function() {
  console.log('🗺️ Access script loaded');

  // Copy address to clipboard
  const copyBtn = document.getElementById('copy-address-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const address = copyBtn.getAttribute('data-address');
      const originalText = copyBtn.innerHTML;
      
      try {
        await navigator.clipboard.writeText(address);
        copyBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copié !';
        
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  }

  // Google Maps consent management
  function checkMapConsent() {
    try {
      const consentData = localStorage.getItem('hotel-cookie-consent');
      const consent = consentData ? JSON.parse(consentData) : null;
      
      const mapIframe = document.getElementById('google-maps-iframe');
      const mapPlaceholder = document.getElementById('map-placeholder');
      
      if (consent && consent.maps) {
        // Load map
        if (mapIframe && !mapIframe.src) {
          const mapUrl = mapIframe.getAttribute('data-src');
          if (mapUrl) {
            mapIframe.src = mapUrl;
            console.log('✅ Google Maps loaded');
          }
        }
        if (mapPlaceholder) mapPlaceholder.classList.add('hidden');
      } else {
        // Show placeholder
        if (mapPlaceholder) mapPlaceholder.classList.remove('hidden');
        console.log('⚠️ Google Maps blocked - no consent');
      }
    } catch (err) {
      console.error('Error checking map consent:', err);
    }
  }

  // Enable maps button
  const enableMapsBtn = document.getElementById('enable-maps-btn');
  if (enableMapsBtn) {
    enableMapsBtn.addEventListener('click', () => {
      const consent = {
        analytics: false,
        maps: true,
        fonts: true,
        timestamp: Date.now()
      };
      localStorage.setItem('hotel-cookie-consent', JSON.stringify(consent));
      console.log('✅ Maps consent granted via button');
      
      setTimeout(() => {
        checkMapConsent();
      }, 100);
    });
  }

  // Check on load and when consent changes
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkMapConsent, 100);
  });
  
  window.addEventListener('cookieConsentChanged', () => {
    console.log('🔄 Cookie consent changed, reloading map');
    setTimeout(checkMapConsent, 100);
  });
})();

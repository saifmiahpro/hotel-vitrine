// Language Switcher
(function() {
  console.log('🌐 Language Switcher loaded');

  const flags = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸',
    de: '🇩🇪',
    it: '🇮🇹',
    ja: '🇯🇵',
    nl: '🇳🇱',
    pt: '🇵🇹',
    zh: '🇨🇳',
    ar: '🇸🇦',
    ru: '🇷🇺'
  };

  // Detect current language from URL
  function getCurrentLang() {
    const pathname = window.location.pathname;
    if (pathname.startsWith('/ru')) return 'ru';
    if (pathname.startsWith('/ar')) return 'ar';
    if (pathname.startsWith('/zh')) return 'zh';
    if (pathname.startsWith('/pt')) return 'pt';
    if (pathname.startsWith('/nl')) return 'nl';
    if (pathname.startsWith('/ja')) return 'ja';
    if (pathname.startsWith('/it')) return 'it';
    if (pathname.startsWith('/de')) return 'de';
    if (pathname.startsWith('/es')) return 'es';
    if (pathname.startsWith('/en')) return 'en';
    return 'fr';
  }

  // Initialize current language display
  function initLanguage() {
    const currentLang = getCurrentLang();
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
      currentFlag.textContent = flags[currentLang];
    }
    
    // Update mobile buttons style
    updateMobileButtons(currentLang);
  }

  // Toggle dropdown (desktop)
  function initDropdown() {
    const langButton = document.getElementById('lang-button');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (langButton && langDropdown) {
      langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!document.getElementById('lang-selector')?.contains(e.target)) {
          langDropdown.classList.add('hidden');
        }
      });
    }
  }

  // Change language
  function changeLanguage(lang) {
    // Detect current language from URL
    const currentPageLang = getCurrentLang();
    
    if (lang === currentPageLang) {
      console.log(`🌐 Already on ${lang} page`);
      return;
    }
    
    localStorage.setItem('lang', lang);
    console.log(`🌐 Changing language from ${currentPageLang} to: ${lang}`);
    
    // Show loading feedback
    document.body.style.opacity = '0.7';
    document.body.style.pointerEvents = 'none';
    
    // Redirect to the correct language page
    setTimeout(() => {
      if (lang === 'ru') {
        window.location.href = '/ru/';
      } else if (lang === 'ar') {
        window.location.href = '/ar/';
      } else if (lang === 'zh') {
        window.location.href = '/zh/';
      } else if (lang === 'pt') {
        window.location.href = '/pt/';
      } else if (lang === 'nl') {
        window.location.href = '/nl/';
      } else if (lang === 'ja') {
        window.location.href = '/ja/';
      } else if (lang === 'it') {
        window.location.href = '/it/';
      } else if (lang === 'de') {
        window.location.href = '/de/';
      } else if (lang === 'es') {
        window.location.href = '/es/';
      } else if (lang === 'en') {
        window.location.href = '/en/';
      } else {
        window.location.href = '/';
      }
    }, 200);
  }

  // Update mobile buttons style
  function updateMobileButtons(activeLang) {
    document.querySelectorAll('.lang-option-mobile').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === activeLang) {
        btn.classList.remove('bg-[#1C1C1C]/5');
        btn.classList.add('bg-[#C2A983]/10');
      } else {
        btn.classList.remove('bg-[#C2A983]/10');
        btn.classList.add('bg-[#1C1C1C]/5');
      }
    });
  }

  // Attach click handlers to language options (desktop)
  function initDesktopOptions() {
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  }

  // Attach click handlers to language options (mobile)
  function initMobileOptions() {
    document.querySelectorAll('.lang-option-mobile').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLanguage();
      initDropdown();
      initDesktopOptions();
      initMobileOptions();
    });
  } else {
    initLanguage();
    initDropdown();
    initDesktopOptions();
    initMobileOptions();
  }
})();

/**
 * Lightbox component for room gallery
 * Features: ESC key, keyboard navigation, mobile swipe support, focus trap
 */

// @ts-ignore
import siteData from '../../content/site.json' assert { type: 'json' };

interface LightboxState {
  isOpen: boolean;
  currentRoomIndex: number;
  currentImageIndex: number;
}

const state: LightboxState = {
  isOpen: false,
  currentRoomIndex: 0,
  currentImageIndex: 0,
};

let lightboxElement: HTMLDivElement | null = null;
let lightboxImage: HTMLImageElement | null = null;
let lightboxTitle: HTMLHeadingElement | null = null;
let lightboxCounter: HTMLSpanElement | null = null;
let startX = 0;

/**
 * Create lightbox DOM structure
 */
function createLightbox(): void {
  if (lightboxElement) return;

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'fixed inset-0 z-[100] hidden bg-black/95 backdrop-blur-sm';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Galerie photo');

  lightbox.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center p-4">
      <!-- Close Button -->
      <button 
        id="lightbox-close" 
        class="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Fermer la galerie"
      >
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Previous Button -->
      <button 
        id="lightbox-prev" 
        class="absolute left-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Image précédente"
      >
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <!-- Next Button -->
      <button 
        id="lightbox-next" 
        class="absolute right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Image suivante"
      >
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- Image Container -->
      <div class="max-w-7xl w-full flex flex-col items-center">
        <img 
          id="lightbox-image" 
          src="" 
          alt="" 
          class="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
        />
        <div class="mt-6 text-center text-white space-y-2">
          <h3 id="lightbox-title" class="font-playfair text-2xl font-semibold"></h3>
          <p id="lightbox-counter" class="text-sm text-white/70"></p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(lightbox);
  
  // Cache DOM elements
  lightboxElement = lightbox;
  lightboxImage = lightbox.querySelector('#lightbox-image');
  lightboxTitle = lightbox.querySelector('#lightbox-title');
  lightboxCounter = lightbox.querySelector('#lightbox-counter');

  // Attach event listeners
  lightbox.querySelector('#lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.querySelector('#lightbox-prev')?.addEventListener('click', showPrevImage);
  lightbox.querySelector('#lightbox-next')?.addEventListener('click', showNextImage);
  
  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', handleKeyPress);

  // Touch events for mobile swipe
  lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
  lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });
}

/**
 * Open lightbox with specific room and image
 */
export function openLightbox(roomIndex: number, imageIndex: number = 0): void {
  if (roomIndex < 0 || roomIndex >= siteData.ROOM_TYPES.length) return;

  createLightbox();
  
  state.currentRoomIndex = roomIndex;
  state.currentImageIndex = imageIndex;
  state.isOpen = true;

  updateLightboxContent();
  
  if (lightboxElement) {
    lightboxElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    setTimeout(() => {
      lightboxElement?.querySelector<HTMLButtonElement>('#lightbox-close')?.focus();
    }, 100);
  }
}

/**
 * Close lightbox
 */
function closeLightbox(): void {
  if (!lightboxElement) return;
  
  lightboxElement.classList.add('hidden');
  document.body.style.overflow = '';
  state.isOpen = false;
}

/**
 * Show previous image
 */
function showPrevImage(): void {
  const room = siteData.ROOM_TYPES[state.currentRoomIndex];
  state.currentImageIndex = (state.currentImageIndex - 1 + room.gallery.length) % room.gallery.length;
  updateLightboxContent();
}

/**
 * Show next image
 */
function showNextImage(): void {
  const room = siteData.ROOM_TYPES[state.currentRoomIndex];
  state.currentImageIndex = (state.currentImageIndex + 1) % room.gallery.length;
  updateLightboxContent();
}

/**
 * Update lightbox content (image, title, counter)
 */
function updateLightboxContent(): void {
  const room = siteData.ROOM_TYPES[state.currentRoomIndex];
  const imagePath = `/images/${room.gallery[state.currentImageIndex]}`;
  
  if (lightboxImage) {
    lightboxImage.src = imagePath;
    lightboxImage.alt = `${room.name} - Image ${state.currentImageIndex + 1}`;
  }
  
  if (lightboxTitle) {
    lightboxTitle.textContent = `Chambre ${room.name}`;
  }
  
  if (lightboxCounter) {
    lightboxCounter.textContent = `${state.currentImageIndex + 1} / ${room.gallery.length}`;
  }
}

/**
 * Handle keyboard navigation
 */
function handleKeyPress(e: KeyboardEvent): void {
  if (!state.isOpen) return;
  
  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPrevImage();
      break;
    case 'ArrowRight':
      showNextImage();
      break;
  }
}

/**
 * Handle touch start for swipe detection
 */
function handleTouchStart(e: TouchEvent): void {
  startX = e.touches[0].clientX;
}

/**
 * Handle touch end for swipe detection
 */
function handleTouchEnd(e: TouchEvent): void {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  
  // Swipe threshold: 50px
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      showNextImage(); // Swipe left
    } else {
      showPrevImage(); // Swipe right
    }
  }
}

// Initialize on DOM load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLightbox);
  } else {
    createLightbox();
  }
}

/**
 * Script to generate placeholder images for the hotel website
 * Run with: node scripts/generate-placeholder-images.js
 * 
 * NOTE: These are SVG placeholders. For production, replace with real photos.
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '..', 'public', 'images');

// Ensure images directory exists
try {
  mkdirSync(imagesDir, { recursive: true });
} catch (err) {
  // Directory already exists
}

const images = [
  { name: 'hero.jpg', width: 1920, height: 1080, text: 'Hôtel Hero Image', color: '#0E2235' },
  { name: 'og.jpg', width: 1200, height: 630, text: 'Hotel Le Séjour', color: '#0E2235' },
  { name: 'room-classic-1.jpg', width: 800, height: 600, text: 'Classique 1', color: '#C2A983' },
  { name: 'room-classic-2.jpg', width: 800, height: 600, text: 'Classique 2', color: '#C2A983' },
  { name: 'room-deluxe-1.jpg', width: 800, height: 600, text: 'Deluxe 1', color: '#0E2235' },
  { name: 'room-deluxe-2.jpg', width: 800, height: 600, text: 'Deluxe 2', color: '#0E2235' },
  { name: 'room-suite-1.jpg', width: 800, height: 600, text: 'Suite 1', color: '#C2A983' },
  { name: 'room-suite-2.jpg', width: 800, height: 600, text: 'Suite 2', color: '#C2A983' },
];

images.forEach(({ name, width, height, text, color }) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F7F6F3;stop-opacity:0.3" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad-${name})"/>
  <text x="50%" y="50%" font-family="'Playfair Display', serif" font-size="${width / 20}" font-weight="600" fill="#F7F6F3" text-anchor="middle" dominant-baseline="middle">${text}</text>
  <text x="50%" y="60%" font-family="'Inter', sans-serif" font-size="${width / 40}" fill="#F7F6F3" opacity="0.7" text-anchor="middle" dominant-baseline="middle">Placeholder - Replace with real photo</text>
</svg>`;

  const filePath = join(imagesDir, name);
  writeFileSync(filePath, svg);
  console.log(`✓ Generated: ${name}`);
});

console.log('\n✅ All placeholder images generated successfully!');
console.log('📸 Remember to replace these SVG placeholders with real hotel photos before production.');

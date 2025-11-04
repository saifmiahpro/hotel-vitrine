# 🚀 Guide Ultra-Rapide : Ajouter l'Espagnol

## En 3 étapes simples :

### 1️⃣ Copier le fichier français

```bash
cp locales/fr.json locales/es.json
```

### 2️⃣ Traduire avec ChatGPT

**Ouvrir `locales/es.json`**, tout sélectionner (Cmd+A), copier (Cmd+C).

**Coller dans ChatGPT** avec ce prompt :

```
Traduis ce fichier JSON en espagnol.
Garde la structure exacte et les clés.
Traduis uniquement les valeurs textuelles.
NE TOUCHE PAS : URLs, emails, téléphones, noms de fichiers images, prices.

[COLLER LE JSON ICI]
```

**Copier le résultat**, coller dans `locales/es.json`, sauvegarder.

### 3️⃣ Activer la langue dans le code

**A. Fichier `src/utils/i18n.ts`** (ligne 3 et 7) :

```typescript
import localeEs from '../../locales/es.json';

const locales = {
  fr: localeFr,
  en: localeEn,
  es: localeEs  // ← AJOUTER
};

export function getCurrentLang(url: URL): 'fr' | 'en' | 'es' {
  const pathname = url.pathname;
  if (pathname.startsWith('/es')) return 'es';  // ← AJOUTER
  if (pathname.startsWith('/en')) return 'en';
  return 'fr';
}
```

**B. Copier la page** :

```bash
cp src/pages/en/index.astro src/pages/es/index.astro
```

**C. Ajouter 🇪🇸 dans le header** (`src/components/Header.astro`) :

Dans le dropdown (ligne ~45), ajouter :

```html
<button data-lang="es" class="lang-option ...">
  <span class="text-xl">🇪🇸</span>
  <span class="font-medium">Español</span>
</button>
```

Dans le mobile (ligne ~98), ajouter :

```html
<button data-lang="es" class="lang-option-mobile ...">
  <span class="text-lg">🇪🇸</span>
  <span>Español</span>
</button>
```

**D. Fichier `public/lang-switcher.js`** (ligne 5 et 60) :

```javascript
const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸'
};

// Dans changeLanguage() :
if (lang === 'es') {
  window.location.href = '/es/';
} else if (lang === 'en') {
  window.location.href = '/en/';
} else {
  window.location.href = '/';
}
```

**E. Fichier `src/components/Lightbox.ts`** (ligne 8 et 13) :

```typescript
import localeEs from '../../locales/es.json' assert { type: 'json' };

const locales = { fr: localeFr, en: localeEn, es: localeEs };
const currentLang = window.location.pathname.startsWith('/es') ? 'es'
                  : window.location.pathname.startsWith('/en') ? 'en'
                  : 'fr';
const siteData = locales[currentLang];
```

### ✅ Tester

```bash
npm run dev
```

Aller sur `http://localhost:4321/es/` 🇪🇸

---

## 🎯 C'est fait ! 

**Pour ajouter d'autres langues** (Italien, Allemand...), répéter ces 3 étapes.

**Temps estimé : 5-10 minutes par langue** ⏱️

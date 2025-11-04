# 🌍 Système Multi-langue - Guide Simple

## 📂 Structure

Chaque langue = **UN SEUL FICHIER JSON** qui contient **TOUT** (contenu + traductions UI).

```
/locales/
  ├── fr.json  ← Français 🇫🇷
  ├── en.json  ← English 🇬🇧
  ├── es.json  ← Español 🇪🇸
  ├── de.json  ← Deutsch 🇩🇪
  ├── it.json  ← Italiano 🇮🇹
  ├── ja.json  ← 日本語 🇯🇵
  ├── nl.json  ← Nederlands 🇳🇱
  ├── pt.json  ← Português 🇵🇹
  ├── zh.json  ← 中文 🇨🇳
  ├── ar.json  ← العربية 🇸🇦 (RTL)
  └── ru.json  ← Русский 🇷🇺
```

**🎉 11 LANGUES ACTIVES = 99,8% du tourisme mondial !**

---

## ✅ Comment ajouter une nouvelle langue (ex: Espagnol)

### Étape 1 : Copier le fichier de base

```bash
cp locales/fr.json locales/es.json
```

### Étape 2 : Traduire avec ChatGPT

1. **Ouvrir** `locales/es.json`
2. **Copier** tout le contenu
3. **Coller** dans ChatGPT avec ce prompt :

```
Traduis ce fichier JSON en espagnol. 
Garde la structure exacte, traduis uniquement les valeurs (pas les clés).
Garde les URLs, emails, téléphones et noms de fichiers d'images intacts.

[Coller le contenu du fichier]
```

4. **Copier** le résultat de ChatGPT
5. **Coller** dans `locales/es.json`
6. **Sauvegarder**

### Étape 3 : Ajouter la langue dans le code

#### A. Modifier `src/utils/i18n.ts`

```typescript
import localeFr from '../../locales/fr.json';
import localeEn from '../../locales/en.json';
import localeEs from '../../locales/es.json'; // ← AJOUTER

const locales = {
  fr: localeFr,
  en: localeEn,
  es: localeEs  // ← AJOUTER
};

export function getCurrentLang(url: URL): 'fr' | 'en' | 'es' {  // ← AJOUTER 'es'
  const pathname = url.pathname;
  if (pathname.startsWith('/es')) return 'es';  // ← AJOUTER
  if (pathname.startsWith('/en')) return 'en';
  return 'fr';
}
```

#### B. Créer la page `src/pages/es/index.astro`

```bash
cp src/pages/en/index.astro src/pages/es/index.astro
```

#### C. Ajouter le drapeau dans `src/components/Header.astro`

Dans le dropdown desktop et mobile, ajouter :

```html
<button data-lang="es" class="lang-option ...">
  <span class="text-xl">🇪🇸</span>
  <span class="font-medium">Español</span>
</button>
```

#### D. Mettre à jour `public/lang-switcher.js`

Ajouter l'espagnol dans les drapeaux :

```javascript
const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸'  // ← AJOUTER
};
```

Et dans la fonction de redirection :

```javascript
if (lang === 'es') {
  window.location.href = '/es/';
} else if (lang === 'en') {
  window.location.href = '/en/';
} else {
  window.location.href = '/';
}
```

#### E. Mettre à jour `Lightbox.ts`

```typescript
import localeEs from '../../locales/es.json' assert { type: 'json' };

const currentLang = window.location.pathname.startsWith('/es') ? 'es' 
                  : window.location.pathname.startsWith('/en') ? 'en' 
                  : 'fr';
```

### Étape 4 : Tester

```bash
npm run dev
```

Aller sur `http://localhost:4321/es/`

---

## 🎯 Avantages de ce système

✅ **Un seul fichier par langue** → facile à gérer  
✅ **Copier-coller dans ChatGPT** → traduction en 2 min  
✅ **Tout est au même endroit** → contenu + UI  
✅ **Pas besoin de coder** → juste du JSON  

---

## 📝 Langues futures (optionnel)

- 🇰🇷 **Coréen** → `ko.json` (marché premium en croissance)
- 🇹🇷 **Turc** → `tr.json`
- 🇵🇱 **Polonais** → `pl.json`

---

## ✅ Système nettoyé

✅ **Anciens fichiers supprimés** :
- ~~`content/site.json`~~ → Supprimé
- ~~`content/site.en.json`~~ → Supprimé  
- ~~`src/utils/translations.ts`~~ → Supprimé
- ~~`content/`~~ → Dossier supprimé

**✨ Maintenant tout est dans `/locales/` ! Système propre et optimisé. 🎉**

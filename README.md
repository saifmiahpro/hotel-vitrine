# 🏨 Site Vitrine Hôtel - Haut de Gamme

Site vitrine statique élégant pour hôtel, construit avec **Astro + TailwindCSS + TypeScript**. Déployable instantanément sur Netlify, puis portable vers n'importe quel hébergeur.

## ✨ Caractéristiques

- **🎨 Design premium** : Palette sobre et élégante (or #C2A983, bleu nuit #0E2235, fond #F7F6F3)
- **📱 Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **♿ Accessible** : Conformité WCAG AA (contraste, navigation clavier, focus trap)
- **⚡ Performance** : 100% statique, optimisé pour Lighthouse (>90)
- **🔒 Sécurité** : En-têtes stricts (CSP, HSTS, etc.) pour 3 hébergeurs
- **📝 Contenu centralisé** : Un seul fichier JSON à modifier (`content/site.json`)
- **🚀 Portabilité maximale** : Déployable sur Netlify, OVH, Hostinger, S3, Nginx, Apache

## 📂 Structure du projet

```
hotel-vitrine/
├── content/
│   └── site.json              # ⭐ Configuration unique du contenu
├── deploy/
│   ├── apache.htaccess        # En-têtes de sécurité Apache
│   └── nginx.conf             # En-têtes de sécurité Nginx
├── public/
│   ├── images/                # Images du site (remplacer les placeholders)
│   ├── robots.txt             # Configuration SEO
│   └── sitemap.xml            # Sitemap pour référencement
├── scripts/
│   └── generate-placeholder-images.js  # Générateur d'images de démonstration
├── src/
│   ├── components/
│   │   ├── Header.astro       # En-tête sticky avec navigation
│   │   ├── Hero.astro         # Section hero full-width
│   │   ├── Rooms.astro        # Grille de chambres
│   │   ├── Access.astro       # Infos pratiques + carte
│   │   ├── Contact.astro      # Formulaire + coordonnées
│   │   ├── Footer.astro       # Pied de page
│   │   └── Lightbox.ts        # Galerie photo (ESC, clavier, mobile)
│   ├── layouts/
│   │   └── Base.astro         # Layout de base (SEO, meta tags)
│   ├── pages/
│   │   └── index.astro        # Page principale
│   └── styles/
│       └── global.css         # Styles globaux + Tailwind
├── astro.config.mjs           # Configuration Astro
├── netlify.toml               # Configuration Netlify + en-têtes de sécurité
├── package.json
├── tsconfig.json
└── README.md                  # Ce fichier
```

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 18+ et **npm**

### Installation

```bash
# Installer les dépendances
npm install

# Générer les images placeholder (optionnel - déjà fait)
node scripts/generate-placeholder-images.js

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:4321**

### Commandes disponibles

| Commande           | Action                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Installer les dépendances                        |
| `npm run dev`      | Démarrer le serveur local (http://localhost:4321)|
| `npm run build`    | Build de production dans `./dist/`               |
| `npm run preview`  | Prévisualiser le build en local                  |

## 📝 Modifier le contenu

**Tous les textes, prix, adresse, et informations sont centralisés dans un seul fichier :**

```
content/site.json
```

### Variables principales :

- `HOTEL_NAME` : Nom de l'hôtel
- `CITY` : Ville
- `TAGLINE` : Slogan
- `INTRO_PARAGRAPH` : Description
- `AMENITIES` : Liste d'atouts
- `ROOM_TYPES` : Chambres (nom, description, prix, galerie)
- `ADDRESS` : Adresse complète
- `PHONE` / `EMAIL` : Coordonnées
- `GOOGLE_MAPS_EMBED_URL` : URL iframe Google Maps
- `SEO` : Meta title, description, image OG

**Exemple :**

```json
{
  "HOTEL_NAME": "Hôtel Le Séjour",
  "CITY": "Paris",
  "TAGLINE": "Le confort discret au cœur de Paris",
  ...
}
```

### Remplacer les images

Les images sont dans `public/images/`. Remplacez les fichiers SVG par de vraies photos :

- `hero.jpg` (1920x1080) : Image hero principale
- `og.jpg` (1200x630) : Image Open Graph (réseaux sociaux)
- `room-classic-1.jpg`, `room-classic-2.jpg` : Chambre Classique
- `room-deluxe-1.jpg`, `room-deluxe-2.jpg` : Chambre Deluxe
- `room-suite-1.jpg`, `room-suite-2.jpg` : Suite

**Important :** Gardez les mêmes noms de fichiers ou modifiez `content/site.json` en conséquence.

## 🧪 Déploiement Netlify (Démo)

### Option 1 : Via l'interface Netlify

1. Push votre code sur GitHub/GitLab
2. Connectez-vous sur [Netlify](https://app.netlify.com)
3. Cliquez sur **"Add new site" > "Import an existing project"**
4. Sélectionnez votre repo
5. Configuration build :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Déployez !

Le formulaire de contact fonctionnera automatiquement via **Netlify Forms**.

### Option 2 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## 🚀 Passage en production (autre hébergeur)

Le site est **100% portable**. Voici les étapes pour déployer sur un autre hébergeur (OVH, Hostinger, VPS, etc.) :

### 1. Build du site

```bash
npm run build
```

Cela génère le dossier `dist/` contenant tous les fichiers statiques.

### 2. Transférer les fichiers

Copiez le contenu du dossier `dist/` vers votre hébergeur :

- **Via FTP/SFTP** : Transférez vers `public_html/` ou `www/`
- **Via SSH** : `scp -r dist/* user@serveur:/var/www/html/`

### 3. Appliquer les en-têtes de sécurité

Le projet inclut des fichiers de configuration pour Apache et Nginx dans le dossier `deploy/`.

#### Apache (.htaccess)

Copiez `deploy/apache.htaccess` à la racine de votre site et renommez-le `.htaccess` :

```bash
cp deploy/apache.htaccess /var/www/html/.htaccess
```

#### Nginx

Intégrez le contenu de `deploy/nginx.conf` dans votre fichier de configuration Nginx (généralement dans `/etc/nginx/sites-available/`), puis rechargez :

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Configurer le nom de domaine

- Pointez votre domaine vers l'IP du serveur (enregistrement A)
- Configurez un certificat SSL (Let's Encrypt recommandé)
- Mettez à jour `astro.config.mjs` avec votre domaine :

```js
export default defineConfig({
  site: 'https://votre-domaine.com',
  ...
});
```

### 5. Formulaire de contact (hors Netlify)

Le formulaire utilise **Netlify Forms** par défaut. Pour d'autres hébergeurs, vous avez 3 options :

#### Option A : Mailto simple

Dans `src/components/Contact.astro`, remplacez :

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
```

par :

```html
<form action="mailto:contact@hotel-lesejour.com" method="POST" enctype="text/plain">
```

#### Option B : Service externe (Formspree, Basin, etc.)

1. Créez un compte sur [Formspree](https://formspree.io/) ou [Basin](https://usebasin.com/)
2. Obtenez votre endpoint
3. Remplacez dans `Contact.astro` :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option C : Votre propre backend

Créez un endpoint API (Node.js, PHP, etc.) et modifiez l'attribut `action` du formulaire.

## 🔒 Sécurité

Le site inclut des en-têtes de sécurité stricts :

- **HSTS** : Force HTTPS pendant 2 ans
- **CSP** : Politique de sécurité du contenu
- **X-Frame-Options** : Prévient le clickjacking
- **Permissions-Policy** : Désactive les fonctionnalités inutiles

### ⚠️ Intégrer un moteur de réservation tiers

Si vous devez intégrer un widget de réservation externe (Booking.com, etc.), modifiez la directive `frame-src` dans les fichiers de sécurité :

**netlify.toml :**
```toml
Content-Security-Policy = """
  frame-src 'self' https://www.google.com https://booking.example.com;
  ...
"""
```

**deploy/apache.htaccess :**
```apache
Header always set Content-Security-Policy "frame-src 'self' https://www.google.com https://booking.example.com; ..."
```

**deploy/nginx.conf :**
```nginx
add_header Content-Security-Policy "frame-src 'self' https://www.google.com https://booking.example.com; ..." always;
```

## 📊 Performance & SEO

### Lighthouse Score attendu (desktop) :

- **Performance** : ≥ 90
- **Accessibility** : ≥ 90
- **Best Practices** : ≥ 90
- **SEO** : ≥ 90

### Optimisations incluses :

- ✅ Compression HTML
- ✅ Images lazy-loading
- ✅ Cache immutable (1 an) pour assets statiques
- ✅ Polices en `display=swap`
- ✅ Tailwind purge activé
- ✅ Meta tags OG/Twitter
- ✅ Sitemap & robots.txt

## 🎨 Personnalisation

### Changer les couleurs

Modifiez les couleurs dans les composants Astro (utilisent Tailwind) :

- **Fond** : `bg-[#F7F6F3]`
- **Texte** : `text-[#1C1C1C]`
- **Accent or** : `text-[#C2A983]`
- **Bleu nuit** : `bg-[#0E2235]`

### Changer les polices

Les polices sont importées dans `src/layouts/Base.astro` :

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

Remplacez par vos polices préférées et mettez à jour `global.css`.

## 📄 Pages additionnelles (optionnel)

Pour créer des pages légales (mentions légales, CGV, etc.) :

1. Créez un fichier dans `src/pages/` (ex: `mentions-legales.astro`)
2. Utilisez le layout `Base.astro`
3. Ajoutez le lien dans le footer

Exemple :

```astro
---
// src/pages/mentions-legales.astro
import Base from '../layouts/Base.astro';
---

<Base title="Mentions légales">
  <main class="py-20">
    <div class="container mx-auto px-4">
      <h1 class="font-playfair text-4xl font-bold mb-8">Mentions légales</h1>
      <p>Contenu...</p>
    </div>
  </main>
</Base>
```

## 🐛 Dépannage

### Le formulaire ne fonctionne pas sur Netlify

Vérifiez que :
1. Vous avez bien `data-netlify="true"` dans le `<form>`
2. Le champ `<input type="hidden" name="form-name" value="contact" />` existe
3. Vous avez rebuildé et redéployé après modification

### Les images ne s'affichent pas

- Vérifiez que les fichiers existent dans `public/images/`
- Vérifiez les noms dans `content/site.json`
- En production, assurez-vous que le dossier `images/` a été copié

### La lightbox ne fonctionne pas

- Vérifiez la console pour les erreurs TypeScript
- Assurez-vous que `Lightbox.ts` est bien importé dans `Rooms.astro`

## 📚 Technologies utilisées

- **[Astro](https://astro.build/)** - Framework web statique
- **[TailwindCSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Google Fonts](https://fonts.google.com/)** - Playfair Display & Inter

## 📝 Checklist déploiement

- [ ] Remplacer les images placeholder par de vraies photos
- [ ] Compléter `content/site.json` avec les vraies données
- [ ] Mettre à jour l'URL Google Maps embed
- [ ] Tester le formulaire de contact
- [ ] Vérifier le responsive sur mobile/tablette
- [ ] Tester l'accessibilité (navigation clavier, lecteur d'écran)
- [ ] Lancer un audit Lighthouse
- [ ] Configurer le certificat SSL (HTTPS)
- [ ] Tester tous les liens de navigation
- [ ] Mettre à jour `astro.config.mjs` avec le domaine final
- [ ] Mettre à jour `robots.txt` et `sitemap.xml` avec le domaine final

## 📞 Support

Pour toute question ou problème :
- **Documentation Astro** : https://docs.astro.build
- **Documentation Netlify** : https://docs.netlify.com
- **TailwindCSS** : https://tailwindcss.com/docs

## 📄 Licence

Ce projet est un template d'usage libre. Personnalisez-le selon vos besoins.

---

**Développé avec ❤️ pour les hôteliers exigeants.**

# 🚀 Guide de Déploiement Rapide

## 🧪 Démo Netlify (5 minutes)

### Prérequis
- Compte GitHub/GitLab (gratuit)
- Compte Netlify (gratuit)

### Étapes

1. **Initialiser Git et pusher**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Hotel website"
   git branch -M main
   git remote add origin https://github.com/votre-username/hotel-vitrine.git
   git push -u origin main
   ```

2. **Déployer sur Netlify**
   - Aller sur https://app.netlify.com
   - Cliquer sur "Add new site" > "Import an existing project"
   - Connecter votre repo GitHub/GitLab
   - Configuration :
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Cliquer sur "Deploy site"

3. **Tester le formulaire**
   - Aller dans "Forms" dans le dashboard Netlify
   - Soumettre un test via le formulaire du site
   - Vérifier la réception dans Netlify

✅ **C'est tout !** Votre site est en ligne avec HTTPS automatique.

---

## 🚀 Production (autre hébergeur)

### Option A : Hébergement mutualisé (OVH, Hostinger, etc.)

1. **Build local**
   ```bash
   npm run build
   ```

2. **Transférer via FTP/SFTP**
   - Connecter à votre hébergeur via FileZilla ou Cyberduck
   - Uploader le contenu de `dist/` vers `public_html/` ou `www/`

3. **Appliquer les en-têtes Apache**
   ```bash
   # Renommer et uploader
   cp deploy/apache.htaccess .htaccess
   # Uploader .htaccess à la racine du site
   ```

4. **Configurer le domaine**
   - Pointer votre domaine vers l'IP du serveur (DNS A record)
   - Activer SSL dans le panneau de contrôle (Let's Encrypt gratuit)

### Option B : VPS/Serveur dédié (Nginx)

1. **Build et transférer**
   ```bash
   npm run build
   scp -r dist/* user@votre-serveur:/var/www/hotel/
   ```

2. **Configurer Nginx**
   ```bash
   # Créer un fichier de config
   sudo nano /etc/nginx/sites-available/hotel
   
   # Copier le contenu de deploy/nginx.conf
   # Adapter les chemins et domaines
   
   # Activer le site
   sudo ln -s /etc/nginx/sites-available/hotel /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

3. **Configurer SSL avec Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com
   ```

### Option C : S3 + CloudFront (AWS)

1. **Build**
   ```bash
   npm run build
   ```

2. **Créer un bucket S3**
   - Activer "Static website hosting"
   - Upload le contenu de `dist/`

3. **Configurer CloudFront**
   - Créer une distribution CloudFront
   - Pointer vers le bucket S3
   - Configurer les Custom Headers (voir deploy/nginx.conf pour les valeurs)

4. **Pointer le domaine**
   - Route53 ou votre DNS : CNAME vers CloudFront

---

## 📋 Checklist avant mise en production

### Contenu
- [ ] ✏️ Modifier `content/site.json` avec les vraies données
- [ ] 📸 Remplacer toutes les images dans `public/images/`
- [ ] 🗺️ Mettre à jour l'URL Google Maps embed
- [ ] 📧 Vérifier email et téléphone
- [ ] 💰 Vérifier les prix des chambres

### Configuration
- [ ] 🌐 Mettre à jour `astro.config.mjs` avec le domaine final
- [ ] 🤖 Mettre à jour `robots.txt` avec le domaine
- [ ] 🗺️ Mettre à jour `sitemap.xml` avec le domaine et la date
- [ ] 🔒 Configurer SSL/HTTPS
- [ ] 📮 Configurer le formulaire (Netlify Forms ou alternative)

### Tests
- [ ] 📱 Tester sur mobile (iOS + Android)
- [ ] 💻 Tester sur desktop (Chrome, Firefox, Safari)
- [ ] ⌨️ Navigation au clavier (Tab, Enter, ESC)
- [ ] 🖱️ Tous les liens fonctionnent
- [ ] 🖼️ Lightbox galerie photos (navigation, ESC, mobile swipe)
- [ ] 📝 Formulaire de contact (validation, soumission)
- [ ] 🗺️ Carte Google Maps (affichage, itinéraire)
- [ ] 🎯 Ancres de navigation (scroll smooth)

### Performance & SEO
- [ ] 🚀 Lancer Lighthouse audit (Performance, SEO, Accessibility > 90)
- [ ] 📊 Vérifier PageSpeed Insights
- [ ] 🔍 Soumettre sitemap à Google Search Console
- [ ] 📈 Configurer Google Analytics (optionnel)

---

## 📮 Formulaire : Alternatives à Netlify

### Option 1 : Formspree (recommandé)
```html
<!-- Dans Contact.astro, remplacer le form par : -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
1. Créer un compte sur https://formspree.io
2. Obtenir votre Form ID
3. Remplacer `YOUR_FORM_ID`

### Option 2 : Basin
```html
<form action="https://usebasin.com/f/YOUR_FORM_ID" method="POST">
```
1. Créer un compte sur https://usebasin.com
2. Obtenir votre Form ID
3. Remplacer `YOUR_FORM_ID`

### Option 3 : Mailto (simple mais limité)
```html
<form action="mailto:contact@hotel.com" method="POST" enctype="text/plain">
```
⚠️ Ouvre le client email de l'utilisateur (pas idéal UX)

### Option 4 : Backend custom
Créer votre propre endpoint API (Node.js, PHP, Python) et pointer le formulaire vers celui-ci.

---

## 🔧 Maintenance

### Mettre à jour le contenu
1. Modifier `content/site.json`
2. Rebuild : `npm run build`
3. Redéployer `dist/`

### Ajouter des photos
1. Ajouter les images dans `public/images/`
2. Mettre à jour les références dans `content/site.json`
3. Rebuild et redéployer

### Modifier les couleurs/styles
1. Éditer les composants `.astro` dans `src/components/`
2. Modifier les classes Tailwind (ex: `bg-[#C2A983]`)
3. Rebuild et redéployer

---

## 🆘 Dépannage

### "Cannot find module" lors du build
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Les images ne s'affichent pas en production
- Vérifier que `public/images/` a bien été copié dans `dist/images/`
- Vérifier les chemins dans `content/site.json` (pas de `/` au début)

### Le formulaire ne fonctionne pas
- **Netlify** : Vérifier `data-netlify="true"` et le champ `form-name`
- **Autre** : Configurer une alternative (Formspree, etc.)

### Erreurs CSP (Content Security Policy)
Si vous ajoutez un widget externe (booking, chat), modifier la CSP dans :
- `netlify.toml` (ligne Content-Security-Policy)
- `deploy/apache.htaccess` (ligne Header CSP)
- `deploy/nginx.conf` (ligne add_header CSP)

---

## 📞 Support

- **Astro Docs** : https://docs.astro.build
- **Netlify Docs** : https://docs.netlify.com
- **Tailwind Docs** : https://tailwindcss.com/docs
- **GitHub Issues** : Créer une issue sur votre repo

---

**Bon déploiement ! 🚀**

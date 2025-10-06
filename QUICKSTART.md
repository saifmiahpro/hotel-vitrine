# ⚡ Démarrage Ultra-Rapide

## 🚀 En 3 minutes

```bash
# 1. Installer
npm install

# 2. Lancer en local
npm run dev
# → http://localhost:4321

# 3. Build de production
npm run build
```

## 📝 Modifier le contenu

**Un seul fichier à éditer** : `content/site.json`

```json
{
  "HOTEL_NAME": "Votre Hôtel",
  "CITY": "Votre Ville",
  "PHONE": "+33 X XX XX XX XX",
  "EMAIL": "contact@votre-hotel.com",
  "ADDRESS": "Votre adresse complète",
  ...
}
```

## 📸 Remplacer les images

Fichiers dans `public/images/` :
- `hero.jpg` (1920x1080) → Image principale
- `room-*.jpg` (800x600) → Photos chambres
- `og.jpg` (1200x630) → Réseaux sociaux

**Important** : Gardez les mêmes noms ou modifiez `site.json`

## 🧪 Déployer sur Netlify

1. Push sur GitHub
2. Netlify → Import project
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy !

✅ Le formulaire de contact fonctionne automatiquement

## 🚀 Déployer ailleurs

```bash
# 1. Build
npm run build

# 2. Upload dist/ vers votre hébergeur (FTP/SSH)

# 3. Copier les en-têtes de sécurité
# Apache: deploy/apache.htaccess → .htaccess
# Nginx: deploy/nginx.conf → intégrer dans votre config
```

## 📋 Checklist minimale

- [ ] ✏️ Éditer `content/site.json`
- [ ] 📸 Remplacer les 8 images
- [ ] 🌐 Mettre à jour `astro.config.mjs` avec votre domaine
- [ ] 🔒 Configurer HTTPS
- [ ] ✅ Tester sur mobile et desktop

## 📚 Documentation complète

- **README.md** → Guide complet
- **DEPLOY.md** → Déploiement détaillé
- **PROJET-COMPLET.md** → Récapitulatif du livrable

## 🆘 Problème ?

**Build échoue** :
```bash
rm -rf node_modules
npm install
npm run build
```

**Formulaire ne fonctionne pas (hors Netlify)** :
Voir `DEPLOY.md` section "Formulaire : Alternatives"

---

**C'est tout ! Votre site est prêt. 🎉**

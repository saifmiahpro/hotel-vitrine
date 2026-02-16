# Configuration Decap CMS pour Hôtel Anatole France

## ✅ Installation terminée

Decap CMS est maintenant installé et configuré pour gérer le contenu de toutes les langues du site.

## 📋 Étapes de configuration Netlify (À FAIRE)

### 1. Activer Netlify Identity

1. Va sur le dashboard Netlify de ton site : https://app.netlify.com
2. Clique sur ton site `hotel-vitrine`
3. Va dans **Site configuration** → **Identity**
4. Clique sur **Enable Identity**

### 2. Configurer Git Gateway

1. Dans la même page Identity, descends à **Services** → **Git Gateway**
2. Clique sur **Enable Git Gateway**
3. Cela permet à Decap CMS de sauvegarder les modifications directement dans Git

### 3. Inviter ton client comme utilisateur

1. Va dans **Identity** → **Invite users**
2. Entre l'email de ton client
3. Il recevra un email d'invitation
4. Il devra créer son mot de passe

### 4. (Optionnel) Configurer les paramètres d'inscription

1. Dans **Identity** → **Settings and usage**
2. **Registration** : Mets sur **Invite only** (pour que seuls les utilisateurs invités puissent se connecter)
3. **External providers** : Tu peux activer Google/GitHub si tu veux que ton client puisse se connecter avec ces comptes

## 🎯 Utilisation pour ton client

### Comment ton client accède au CMS :

1. Il va sur **https://tonsite.com/admin**
2. Il clique sur **"Login with Netlify Identity"**
3. Il entre son email et mot de passe
4. Il voit l'interface d'administration avec toutes les langues 🇫🇷 🇬🇧 🇪🇸 🇩🇪 etc.

### Comment éditer le contenu :

1. **Sélectionner une langue** : Dans la barre latérale gauche, cliquer sur la langue à éditer (ex: "Contenu Français 🇫🇷")
2. **Éditer les champs** :
   - Nom de l'hôtel
   - Textes de présentation
   - Chambres (prix, descriptions, images)
   - Informations pratiques (check-in, parking, etc.)
   - Tous les textes de l'interface
3. **Prévisualiser** : Cliquer sur l'aperçu pour voir les changements
4. **Publier** : Cliquer sur "Publish" en haut à droite
5. **Attendre 1-2 minutes** : Netlify rebuild automatiquement le site

## 🧪 Test en local (pour toi)

Pour tester Decap CMS en local avant de mettre en production :

```bash
# Dans un terminal
npm run dev

# Dans un autre terminal
npx decap-server
```

Puis va sur `http://localhost:4321/admin` - tu pourras éditer les fichiers JSON directement sans authentification.

## 📁 Structure des fichiers

- **Configuration** : `public/admin/config.yml` - Configuration de toutes les langues et champs
- **Interface** : `public/admin/index.html` - Page HTML qui charge Decap CMS
- **Données** : `locales/*.json` - Fichiers JSON pour chaque langue
- **Layout** : `src/layouts/Base.astro` - Ajout du script Netlify Identity

## 🎨 Ce que ton client peut modifier

✅ **Contenu principal** :
- Nom de l'hôtel, ville, slogan
- Paragraphe d'introduction
- Description de Toulouse
- Toutes les chambres (nom, description, prix, images)
- Équipements de l'hôtel

✅ **Informations pratiques** :
- Horaires check-in/check-out
- Informations parking et transports
- Adresse, téléphone, email

✅ **SEO** :
- Titre et description SEO pour chaque langue
- Image Open Graph

✅ **Textes de l'interface** :
- Navigation (Accueil, Chambres, etc.)
- Formulaire de contact
- Pied de page
- Tous les boutons et labels

## ❌ Ce qu'il ne peut PAS modifier

- Le design du site
- La structure HTML/CSS
- Les composants Astro
- La configuration technique

## 🔒 Sécurité

- Seuls les utilisateurs invités peuvent accéder au CMS
- Toutes les modifications sont sauvegardées dans Git (historique complet)
- Possibilité de revenir en arrière en cas d'erreur
- Aucun accès au code source

## 🆘 Dépannage

### Mon client ne reçoit pas l'email d'invitation
- Vérifie dans les spams
- Renvoie l'invitation depuis Netlify

### Les changements ne s'affichent pas sur le site
- Attends 1-2 minutes (temps de rebuild)
- Vérifie que le deploy Netlify est terminé dans le dashboard

### Erreur "Error loading the CMS configuration"
- Vérifie que Git Gateway est bien activé
- Vérifie que le fichier `public/admin/config.yml` est bien présent

## 📝 Notes importantes

1. **Backup automatique** : Toutes les modifications sont dans Git, donc tout est sauvegardé
2. **Multilingue** : Chaque langue a sa propre section dans le CMS
3. **Facile à utiliser** : Interface visuelle, pas besoin de connaître le code
4. **Gratuit** : Decap CMS est open source et gratuit

---

**Installation par Claude Code** - Configuration terminée le 16 février 2026

# 📸 Guide d'Optimisation des Images

## ⚠️ Problème Actuel

**Image Hero** : `public/images/hero.jpg`
- **Résolution actuelle** : 561×768px (trop petite !)
- **Poids** : 64 KB
- **Problème** : Pixelisation sur grands écrans (>1920px)

---

## ✅ Solution : Image Haute Résolution

### Dimensions recommandées

| Usage | Largeur minimum | Hauteur minimum | Format |
|-------|----------------|----------------|--------|
| **Minimum acceptable** | 1920px | 1080px | JPG/WebP |
| **Recommandé** | 2560px | 1440px | JPG/WebP |
| **Premium (4K)** | 3840px | 2160px | WebP |

---

## 🎯 Comment obtenir une bonne image ?

### **Option 1 : Sites de photos gratuites (RECOMMANDÉ)**

#### **Unsplash** (gratuit, haute qualité)
1. Aller sur https://unsplash.com
2. Chercher : `"hotel lobby toulouse"` ou `"luxury hotel interior"`
3. Filtrer par : **Orientation Paysage** + **Haute résolution**
4. Télécharger en **taille originale** (souvent 4K-6K)

#### **Pexels** (gratuit)
1. https://www.pexels.com
2. Mêmes recherches
3. Télécharger en **Large** ou **Original**

#### **Pixabay** (gratuit)
1. https://www.pixabay.com
2. Recherche similaire
3. Télécharger en résolution maximale

---

### **Option 2 : Photo professionnelle**

Si vous avez accès à l'hôtel :
- **Photographe professionnel** → Idéal
- **Smartphone récent** (iPhone 14+, Samsung S23+) → OK si bonne lumière
- **Résolution minimale** : 12MP (4000×3000px)

---

### **Option 3 : AI Image Upscaling** (améliorer l'image actuelle)

Si vous voulez garder votre image actuelle :

#### **Topaz Gigapixel AI** (payant, excellent)
- Upscale de 561px → 2244px (4x)
- Résultat professionnel
- ~$100 (version d'essai disponible)

#### **Upscayl** (gratuit, open-source)
- Bon résultat
- Upscale 2x-4x
- Télécharger : https://github.com/upscayl/upscayl

#### **En ligne gratuit**
- **Let's Enhance** : https://letsenhance.io (5 images gratuites)
- **Bigjpg** : https://bigjpg.com
- **ImgUpscaler** : https://imgupscaler.com

---

## 🛠️ Optimisation après téléchargement

### **1. Redimensionner (si nécessaire)**

Si l'image fait 6000px :

```bash
# Avec ImageMagick (Mac)
brew install imagemagick
magick convert hero-original.jpg -resize 2560x1440 -quality 85 hero.jpg

# Avec GIMP (gratuit, GUI)
# Export → Qualité 85-90%
```

### **2. Convertir en WebP (format moderne, -30% de poids)**

```bash
# Avec cwebp (Mac)
brew install webp
cwebp -q 85 hero.jpg -o hero.webp
```

Puis dans le code :

```html
<picture>
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Hero">
</picture>
```

### **3. Compression en ligne**

- **TinyPNG** : https://tinypng.com (jusqu'à 20 images)
- **Squoosh** : https://squoosh.app (Google)
- **Compressor.io** : https://compressor.io

---

## 📝 Checklist finale

- [ ] Image **au moins 1920×1080px**
- [ ] Format **JPG** (85-90% qualité) ou **WebP**
- [ ] Poids **< 500 KB** (idéalement < 300 KB)
- [ ] Tester sur **grand écran** (zoom 100%)
- [ ] Vérifier sur **mobile** (pas trop lourd)

---

## 🚀 Installation rapide

### Remplacer l'image actuelle :

1. **Télécharger** une image haute résolution
2. **Renommer** en `hero.jpg`
3. **Remplacer** dans `/public/images/hero.jpg`
4. **Rafraîchir** le navigateur (Cmd+Shift+R)

---

## 🎨 Optimisations temporaires (déjà faites)

En attendant une meilleure image, j'ai ajouté :

✅ **Hauteur max** : 900px (évite trop d'étirement)  
✅ **Overlay plus foncé** : Masque un peu la pixelisation  
✅ **Micro-blur** : Adoucit les pixels sur mobile  
✅ **Loading priority** : Image chargée en priorité  

**Mais la vraie solution = Image haute résolution ! 📸**

---

## 💡 Recommandation finale

**Meilleur choix** :
1. Télécharger une photo **Unsplash** (2560×1440px minimum)
2. Compresser avec **TinyPNG**
3. Remplacer `/public/images/hero.jpg`
4. Convertir aussi en WebP pour -30% de poids

**Gain** : Image nette sur tous les écrans + chargement rapide ! 🚀

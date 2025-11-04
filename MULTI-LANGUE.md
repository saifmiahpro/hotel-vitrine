# 🌍 Système Multi-langue (FR/EN)

## ✅ Ce qui est fait

1. ✅ **Fichier de traduction anglaise** : `content/site.en.json` avec toutes les traductions
2. ✅ **Sélecteur avec drapeaux** : Drapeau 🇫🇷/🇬🇧 dans header (desktop dropdown + mobile)
3. ✅ **Script de base** : `public/lang-switcher.js` créé
4. ✅ **LocalStorage** : Sauvegarde de la préférence utilisateur
5. ⚠️ **Activation partielle** : Le sélecteur sauvegarde la langue mais ne change pas le contenu

## 🚀 Pour activer complètement (2 options)

### Option A : Route dédiée `/en/` (Recommandé - SEO friendly)

**Avantages :** 
- SEO optimal (URLs distinctes)
- Indexation Google par langue
- Pas de JavaScript nécessaire

**À faire :**
1. Créer `src/pages/en/index.astro` qui importe `site.en.json`
2. Modifier le sélecteur pour rediriger vers `/` ou `/en/`
3. ~2h de développement

### Option B : Chargement dynamique (Plus rapide)

**Avantages :**
- Une seule URL
- Changement instantané
- ~1h de développement

**Inconvénients :**
- Moins bon pour le SEO
- Nécessite JavaScript

**À faire :**
1. Créer un script qui charge le JSON et met à jour tous les textes
2. ~1h de développement

## 📋 État actuel du sélecteur

**Desktop :**
- Drapeau avec dropdown élégant
- Positionné entre "Contact" et "Réserver"
- Change visuellement au clic

**Mobile :**
- Deux boutons 🇫🇷 Français / 🇬🇧 English
- Dans le menu burger, section séparée

**Comportement actuel :**
- ✅ Sauvegarde la langue dans localStorage
- ✅ Change le drapeau affiché
- ⚠️ Ne change PAS encore le contenu de la page
- 🔄 Recharge la page (mais charge toujours le FR)

## 🎯 Prochaine étape

**Décider avec le client :**
1. Veut-il vraiment l'anglais ? (budget traduction pro ?)
2. Quelle option préfère-t-il ? (SEO ou simplicité)
3. D'autres langues à prévoir ?

**Si OUI → 1-2h de dev pour activer complètement**
**Si NON → On peut retirer le sélecteur proprement**

---

**Status :** Sélecteur fonctionnel visuellement, activation finale en attente de validation client.

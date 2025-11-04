#!/bin/bash

# Script de téléchargement d'image hero haute résolution depuis Unsplash
# Télécharge une image 2560x1440 d'hôtel de luxe

echo "📸 Téléchargement d'une image hero haute résolution..."

# URL Unsplash pour une image d'hôtel/lobby (random mais toujours de qualité)
# Dimensions: 2560x1440 (2K)
URL="https://source.unsplash.com/2560x1440/?luxury-hotel,hotel-lobby,boutique-hotel"

# Télécharger l'image
curl -L "$URL" -o public/images/hero-new.jpg

if [ $? -eq 0 ]; then
    echo "✅ Image téléchargée avec succès : public/images/hero-new.jpg"
    echo ""
    echo "📋 Prochaines étapes :"
    echo "1. Vérifiez l'image : open public/images/hero-new.jpg"
    echo "2. Si elle vous plaît, remplacez l'ancienne :"
    echo "   mv public/images/hero-new.jpg public/images/hero.jpg"
    echo "3. Rafraîchissez le navigateur (Cmd+Shift+R)"
else
    echo "❌ Erreur lors du téléchargement"
    exit 1
fi

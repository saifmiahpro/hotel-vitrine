# 🍪 Réinitialiser les cookies pour tester le banner

Le banner de cookies ne s'affiche que si vous n'avez **jamais accepté ou refusé** les cookies.

## Option 1 : Console navigateur (le plus rapide)

1. Ouvre le site sur ton iPhone ou ordinateur
2. Sur **iPhone** : Safari → onglet → icône "aA" → "Afficher la console Web"
3. Sur **Desktop** : Clique droit → Inspecter → Console
4. Copie-colle cette commande :

```javascript
localStorage.removeItem('hotel-cookie-consent');
location.reload();
```

5. Appuie sur Entrée → Le site se recharge et le banner s'affiche ! 🎉

---

## Option 2 : Effacer le localStorage (Safari iPhone)

1. **Réglages** → **Safari**
2. Descends et clique sur **"Avancé"**
3. Clique sur **"Données de sites web"**
4. Cherche ton site (hotel-vitrine.netlify.app)
5. Clique dessus → **"Supprimer"**
6. Rafraîchis la page

---

## Option 3 : Mode Navigation Privée

1. Ouvre une **fenêtre privée/incognito**
2. Va sur le site
3. Le banner s'affiche car aucune donnée n'est stockée

---

## Vérifier que ça marche

Après avoir vidé le localStorage :
1. Rafraîchis la page
2. Le banner 🍪 doit apparaître en bas après ~300ms
3. Clique sur "Accepter tout"
4. La carte Google Maps devrait s'afficher dans "Informations & Accès"

---

**Note** : Le banner ne s'affiche qu'**une seule fois**. Une fois que tu as accepté/refusé, le choix est stocké pendant 13 mois.

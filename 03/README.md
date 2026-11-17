# 03 - Gestion de catalogue de livres

Application React de gestion d'un catalogue de livres pour une bibliothèque universitaire

## Fonctionnalités

- Affichage de la liste des livres sous forme de cartes
- Compteur en temps réel du nombre de livres disponibles
- Emprunt et retour d'un livre (le statut et le bouton changent)
- Ajout d'un nouveau livre via un formulaire
- Validation du formulaire : les champs vides sont refusés

## Technologies

- React
- Vite
- JavaScript (jsx)

## Installation

L'application est ensuite accessible sur `http://localhost:5174`.

## Structure du projet

```
03/
├── src/
│   ├── components/
│   │   └── BookCard.jsx   # Carte d'un livre (composant enfant)
│   ├── App.jsx            # Composant principal (état, formulaire, liste)
│   ├── main.jsx           # Point d'entrée
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Composants

### `BookCard`

Affiche un livre dans une carte stylisée.

| Prop | Type | Rôle |
|---|---|---|
| `titre` | chaine: Titre du livre 
| `auteur` | chaine : Auteur du livre 
| `estDisponible` : boolean : Statut : disponible ou emprunté 
| `onClickEmprunt` : Fonction appelée au clic sur le bouton 

Le bouton affiche « Emprunter » si le livre est disponible, « Rendre » sinon.

### `App`
 Il contient :

- l'état `books` (la liste des livres) ;
- les états `titre` et `auteur` (champs contrôlés du formulaire) ;
- la fonction `onClickEmprunt(bookId)` qui inverse `estDisponible` du livre cliqué ;
- la fonction `handleSubmit` qui ajoute un livre à la liste.

## Notions React utilisées

- **Composants et props** : `BookCard` reçoit ses données depuis `App` (lecture seule).
- **Rendu conditionnel** : opérateur ternaire pour le statut et le texte du bouton.
- **`.map()` et `key`** : génération d'une carte par livre, avec un `key` unique.
- **`useState`** : état de la liste des livres et des champs du formulaire.
- **Champs contrôlés** : `value` et `onChange` sur les `input`.
- **Immutabilité** : `map` et l'opérateur spread (`...`) pour créer de nouveaux tableaux au lieu de modifier l'existant.
- **Gestion d'événements** : `onClick`, `onChange`, `onSubmit` avec `preventDefault()`.

## Restrictions

Les livres ajoutés ne sont conservés qu'en mémoire : un rechargement de la page remet la liste de départ (4 livres).

## Auteur

Khady Kandji
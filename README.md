# 🚗 Gestion de Location de Voitures

## 📌 Présentation

Ce projet est une application web de gestion de location de voitures développée avec HTML, CSS et JavaScript Vanilla.

L'objectif est de permettre à un utilisateur de gérer une liste de véhicules à travers une interface simple et dynamique, sans recharger la page.

## ✨ Fonctionnalités

- **Afficher les véhicules (Read)** : Afficher la liste des voitures dans un tableau.
- **Ajouter un véhicule (Create)** : Ajouter une nouvelle voiture à la liste à l'aide d'un formulaire.
- **Modifier un véhicule (Update)** : Modifier les informations d'un véhicule existant.
- **Supprimer un véhicule (Delete)** : Supprimer un véhicule de la liste.
- **Recherche** : Rechercher des véhicules selon leurs informations.
- **Filtrage par catégorie** : Filtrer les véhicules selon leur catégorie.
- **Filtrage par statut** : Afficher les véhicules selon leur disponibilité (Disponible, Louée ou En maintenance).
- **Tri par prix** : Trier les véhicules selon leur prix de location journalier, par ordre croissant ou décroissant.

## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript Vanilla (ES6+)
- Git & GitHub

## 📂 Structure du projet

```text
project/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   └── script.js
│
└── README.md
```

## 🚘 Structure des données

Chaque véhicule est représenté par un objet JavaScript contenant les propriétés suivantes :

| Propriété | Description |
|---|---|
| `id` | Identifiant du véhicule |
| `marque` | Marque du véhicule |
| `modele` | Modèle du véhicule |
| `immatriculation` | Numéro d'immatriculation |
| `categorie` | Catégorie du véhicule |
| `prixJour` | Prix de location par jour |
| `statut` | État actuel du véhicule |

## ⚙️ Concepts JavaScript utilisés

- Variables (`let`, `const`)
- Tableaux et objets
- Boucles `for`
- Fonctions
- Méthodes des tableaux (`push()`, `filter()`, `sort()`)
- Manipulation du DOM
- Gestion des événements (`addEventListener`)
- Création dynamique d'éléments (`createElement`)
- Gestion des formulaires
- Modules JavaScript (`import` / `export`)

## 🚀 Installation et utilisation

1. Cloner le repository :

   ```bash
   git clone <repository-url>
   ```

2. Ouvrir le dossier du projet dans VS Code.

3. Lancer le fichier `index.html` avec l'extension Live Server.

## 🎯 Objectif pédagogique

Ce projet a été réalisé dans le cadre de mon apprentissage du développement web chez YouCode.

Il permet de mettre en pratique les fondamentaux de JavaScript, notamment la manipulation des tableaux, la gestion des événements et la manipulation du DOM à travers une application CRUD.

---

**Développé dans le cadre de ma formation en développement web chez YouCode.**


📋 Gestion de projet avec Jira

Jira a été utilisé pour organiser et suivre le développement du projet.

Création et gestion des tâches.

Organisation du travail en fonction des fonctionnalités à développer.

Suivi de l'avancement des tâches.

Gestion des différentes étapes du projet à travers un workflow.

<img width="1920" height="1020" alt="Board - S2B board - Jira - Google Chrome 10_30_2026 3_43_55 PM" src="https://github.com/user-attachments/assets/215aa204-5b9c-411b-97dd-99630afea19a" />


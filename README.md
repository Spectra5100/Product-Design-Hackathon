# 🚗🌿 Écomove – Comparateur d'Écomobilité

![Écomove Banner](https://img.shields.io/badge/Écomove-Écomobilité-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-En%20développement-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> **Votre site comparateur de transport en commun écologique**  
> Comparez les opérateurs RATP, TCL et RTM selon des indicateurs environnementaux clés.

---

## 📖 Description

**Écomove** est une plateforme web permettant aux citoyens de comparer les performances écologiques des principaux opérateurs de transport en commun français. Le projet a été développé dans le cadre d'un **hackathon de design produit**.

L'application compare les opérateurs **RATP**, **TCL** et **RTM** selon plusieurs indicateurs environnementaux, et attribue à chacun un **score global sur 100**.

---

## ✨ Fonctionnalités

- 🔍 **Comparaison multi-opérateurs** : RATP, TCL, RTM et vue d'ensemble
- 📊 **Indicateurs écologiques détaillés** :
  - Émissions CO₂ (kg de CO₂ par km)
  - Consommation énergétique (kWh par km)
  - Part de véhicules propres (% électriques / hybrides)
  - Taux de remplissage (% moyen d'occupation)
- 🏆 **Score global sur 100** pour chaque opérateur
- 🎨 Interface claire et accessible avec code couleur par opérateur

---

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| **Frontend** | HTML / CSS / JavaScript (React ou Vanilla JS) |
| **Styling** | CSS personnalisé, thème vert (éco-design) |
| **Build tool** | Vite (d'après le chemin de fichier `src/`) |

---

## 🚀 Installation & Lancement

### Prérequis

- Node.js ≥ 16
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-organisation/ecomove.git
cd ecomove

# Installer les dépendances
cd frontend
npm install
```

### Lancement en développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173` (ou le port configuré par Vite).

### Build de production

```bash
npm run build
```

---

## 📁 Structure du projet

```
ecomove/
├── frontend/
│   └── src/
│       ├── components/       # Composants UI
│       ├── data/             # Données des opérateurs
│       ├── App.jsx           # Composant principal
│       └── main.jsx          # Point d'entrée
├── README.md
└── package.json
```

---

## 📊 Données comparées

| Indicateurs écologiques | RATP | TCL | RTM |
|------------------------|------|-----|-----|
| Émissions CO₂ (kg/km)  | 45   | 52  | 48  |
| Consommation (kWh/km)  | 3.2  | 3.8 | 3.5 |
| Véhicules propres (%)  | —    | —   | —   |
| Taux de remplissage (%)| —    | —   | —   |

> *Les données sont indicatives et issues de sources publiques ou estimées pour les besoins du prototype.*

---

## 🎨 Design

L'interface adopte une charte graphique **écologique** :
- Palette de verts dégradés pour l'arrière-plan
- Boutons colorés distinctifs par opérateur (vert RATP, rouge TCL, bleu RTM)
- Typographie moderne et lisible
- Design responsive (mobile-first)

---

## 👥 Équipe

Projet réalisé dans le cadre du **Product Design Hackathon** (référence : `B-TBM-100-LYN-1-1`).

---

## 📄 Licence

Ce projet est sous licence **MIT** — libre d'utilisation, de modification et de distribution.

---

## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Pushez la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

---

*Fait avec 💚 pour un transport plus durable*

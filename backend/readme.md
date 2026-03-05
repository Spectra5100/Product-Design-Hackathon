Backend – Xano (Adrien/ Alicia)

Le backend de l’application a été conçu avec Xano (no-code backend).

### Objectif
Mettre en place une base de données simple et éco-conçue permettant de comparer
les opérateurs de transport public français :
- RATP (Paris)
- TCL (Lyon)
- RTM (Marseille)

### Structure de la base
## 🏗️ Architecture

```
┌─────────────────┐
│   Frontend      │
│  (React/HTML)   │
└────────┬────────┘
         │ HTTP
         ↓
┌─────────────────┐
│   XANO API      │
│   (No-Code)     │
├─────────────────┤
│ • Routes CRUD   │
│ • PostgreSQL    │
│ • Auto-scaling  │
└─────────────────┘
```

## 📂 Structure

```
backend/
├── config/           # Configuration et credentials
│   └── xano.md       # Documentation de l'API Xano
├── docs/             # Documentation technique
│   └── api.md        # Documentation des endpoints
├── data/             # Données sources
│   └── raw/          # CSV originaux
├── .env              # Variables d'environnement (NE PAS COMMIT)
├── .env.example      # Template de configuration
└── README.md         # Ce fichier
```
Deux tables principales ont été créées automatiquement via Xano AI :

## 🔗 API Xano

**Base URL:** Voir fichier `.env`

### Endpoints disponibles :

#### Opérateurs
Pour les opérateurs, Xano génère automatiquement les routes CRUD :

GET /operator → liste des opérateurs  
GET /operator/{id} → détail d’un opérateur  
POST /operator → création  
PATCH /operator/{id} → modification  
DELETE /operator/{id} → suppression


#### Métriques
Pour les métriques opérateurs :

GET /operator_metrics → liste des métriques  
GET /operator_metrics/{id} → détail d’une métrique  
POST /operator_metrics → création  
PATCH /operator_metrics/{id} → modification  
DELETE /operator_metrics/{id} → suppression

### Tables :
- `operator` - Informations sur les opérateurs de transport
- `operator_metrics` - Métriques environnementales

Voir `docs/database.md` pour le schéma complet.

### Choix de conception
- Pas de données inutiles
- Indicateurs simples et comparables
- Backend léger (éco-conception)
- Données issues d’open data et d’estimations hackathon

- ### API (endpoints attendus)
- GET /operators : liste des opérateurs
- GET /operators/{id} : détail d’un opérateur
- GET /operators/{id}/metrics : indicateurs d’un opérateur
- GET /comparison?opA=RATP&opB=TCL : comparaison simple

## Statut backend
Le projet utilise Xano comme backend (BDD + API).  
Le dossier backend/ contient un squelette Node/Express fourni au départ, non utilisé pour l’API finale.

### Source of truth
- Base de données + endpoints : Xano
- Données exportées : backend/data/raw/*.csv

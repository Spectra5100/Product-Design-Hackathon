# Documentation API

## Base URL

Voir fichier `.env`

## Format des Réponses

Toutes les réponses sont au format JSON.

## Endpoints

### GET /operator

Récupère la liste de tous les opérateurs.

**Réponse :**
```json
[
  {
    "id": 1,
    "name": "SYTRAL",
    "city": "Lyon",
    "region": "Auvergne-Rhône-Alpes",
    "modes": "Metro, Bus, Tram",
    "year": 2023
  }
]
```

### GET /operator/{id}

Récupère un opérateur spécifique.

**Paramètres :**
- `id` (integer) : ID de l'opérateur

**Réponse :**
```json
{
  "id": 1,
  "name": "SYTRAL",
  "city": "Lyon",
  "region": "Auvergne-Rhône-Alpes",
  "modes": "Metro, Bus, Tram",
  "year": 2023
}
```

### GET /operator_metrics

Récupère toutes les métriques environnementales.

**Réponse :**
```json
[
  {
    "id": 1,
    "operator_id": 1,
    "co2": 45.2,
    "energy": 1250,
    "clean_share_pct": 65.5,
    "global_score": 78,
    "year": 2023
  }
]
```

## Codes d'Erreur

- `200` : Succès
- `400` : Requête invalide
- `404` : Ressource non trouvée
- `500` : Erreur serveur

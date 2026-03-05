# Schéma de Base de Données

## Vue d'ensemble

Base de données PostgreSQL hébergée et gérée par Xano.

## Tables

### operator

Informations sur les opérateurs de transport public.

| Colonne      | Type      | Description                    |
|--------------|-----------|--------------------------------|
| id           | integer   | Identifiant unique (PK)       |
| created_at   | timestamp | Date de création              |
| name         | string    | Nom de l'opérateur            |
| city         | string    | Ville principale              |
| region       | string    | Région                        |
| modes        | string    | Modes de transport            |
| data_source  | string    | Source des données            |
| year         | integer   | Année de référence            |

#### Données actuelles

| id | created_at       | name | city      | region                  | modes                           | data_source | year |
|----|------------------|------|-----------|-------------------------|---------------------------------|-------------|------|
| 1  | 1768916733594    | RATP | Paris     | Île-de-France           | metro, bus, rer, tram           | open data   | 2024 |
| 2  | 1768916799662    | TCL  | Lyon      | Auvergne-Rhône-Alpes    | metro, bus, tram, funiculaire   | open data   | 2024 |
| 3  | 1768916882616    | RTM  | Marseille | PACA                    | metro, bus, tram                | open data   | 2024 |

**Total : 3 opérateurs**

---

### operator_metrics

Métriques environnementales des opérateurs.

| Colonne            | Type      | Description                       |
|--------------------|-----------|-----------------------------------|
| id                 | integer   | Identifiant unique (PK)          |
| created_at         | timestamp | Date de création                 |
| operator_id        | integer   | Référence à operator (FK)        |
| co2                | number    | Émissions CO2 (g/km)             |
| energy             | number    | Consommation énergétique         |
| clean_share_pct    | number    | Part d'énergie propre (%)        |
| global_score       | integer   | Score global (0-100)             |
| year               | integer   | Année des données                |
| source             | string    | Source des données               |
| avg_occupancy_rate | number    | Taux d'occupation moyen (%)      |


## Table operator_metrics - Données actuelles

| id | operator_id | co2    | year (co2) | energy | year (energy) | clean_share_pct | year (clean) | global_score | year (score) |
|----|-------------|--------|------------|--------|---------------|-----------------|--------------|--------------|--------------|
| 1  | 1 (RATP)    | 0.3186 | 2023       | 1770000| 2024          | 72              | 2024         | 41           | 2024         | 
| 2  | 2 (TCL)     | 0.0354 | 2017       | 3000   | 2024          | 75              | 2024         | 92           | 2024         | 
| 3  | 3 (RTM)     | 86546000| 2023      | 197320 | 2024          | 35              | 2025         | 18           | 2025         |

**Total : 3 métriques**

---

## Relations

```
operator (1) ──< (N) operator_metrics
```

Un opérateur peut avoir plusieurs métriques (une par année).

**Exemples de relations :**
- RATP (id=1) → Métrique id=1 (CO2: 20, Score: 72)
- TCL (id=2) → Métrique id=2 (CO2: 16, Score: 78)
- RTM (id=3) → Métrique id=3 (CO2: 30, Score: 60)

---

## Analyse des données

### Opérateurs par région

| Région                  | Nombre d'opérateurs | Villes            |
|-------------------------|---------------------|-------------------|
| Île-de-France           | 1                   | Paris             |
| Auvergne-Rhône-Alpes    | 1                   | Lyon              |
| PACA                    | 1                   | Marseille         |

### Performance environnementale

| Opérateur | Ville      | CO2 (g/km) | Score global | Énergie propre (%) |
|-----------|------------|------------|--------------|-------------------|
| TCL       | Lyon       | 16         | 78           | 60                |
| RATP      | Paris      | 20         | 72           | 55                |
| RTM       | Marseille  | 30         | 60           | 40                |

**Meilleur score :** TCL (Lyon) avec 78/100  
**Plus faible CO2 :** TCL (Lyon) avec 16 g/km  
**Plus haut taux d'énergie propre :** TCL (Lyon) avec 60%

---

## Index

- `operator.name` : Index pour recherche rapide
- `operator.city` : Index pour filtrage par ville
- `operator_metrics.operator_id` : Index pour jointures
- `operator_metrics.year` : Index pour filtrage par année
- `operator_metrics.global_score` : Index pour classement

---

## Notes

- **Source des données** : Open data et estimations hackathon
- **Année de référence** : 2024
- **Mise à jour** : Les données peuvent être actualisées annuellement
- **Expansion prévue** : Ajout d'autres opérateurs français (Bordeaux, Toulouse, Nantes, etc.)

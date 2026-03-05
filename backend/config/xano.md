# Configuration Xano

## Accès

- **URL** : https://xano.com
- **Workspace** : EcoTransport
- **Base URL API** : Voir fichier `.env`

## Tables

### operator
Informations sur les opérateurs de transport public

### operator_metrics
Métriques environnementales des opérateurs

## Récupérer l'URL de l'API

1. Se connecter à Xano
2. Aller dans **API** (menu gauche)
3. L'URL apparaît en haut : `https://xxxxx.xano.io/api:xxxxx`
4. Copier cette URL dans `.env`

## Export de la configuration

Pour sauvegarder la configuration Xano :
1. API > Settings (⚙️)
2. API Documentation > Download OpenAPI Spec
3. Sauvegarder le fichier JSON

## CORS

Si erreur CORS dans le frontend :
1. Xano > Settings > CORS
2. Ajouter les domaines autorisés :
   - `http://localhost:5173`
   - `http://localhost:8080`
   - Votre domaine de production

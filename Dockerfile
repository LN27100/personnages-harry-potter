FROM node:14

WORKDIR /usr/src/app

# Copie du fichier package.json
COPY package.json .

# Installation des dépendances
RUN npm install

# Copie de l'ensemble des fichiers du projet dans le conteneur
COPY src/ ./src/

# Construction du projet
RUN npm run build

# Commande par défaut pour lancer l'application (serveur de production)
CMD ["npm", "run", "start"]
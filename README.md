# Parcours Développeur Web - OpenClassrooms #

## Projet n°7 - Créer un réseau social d'entreprise ##

### Scénario ###
Depuis plus d'un an, je suis développeuse chez **CONNECT-E**, une petite agence web regroupant une douzaine d'employés.  
Aujourd'hui, **Groupomania**, entreprise spécialisée dans la grande distribution et l'un des plus fidèles clients de notre agence, sollicite nos services pour concevoir un **réseau social interne** destiné à ses employés. Le but de cet outil est de faciliter les interactions entre collègues.  
**Groupomania** a déjà réfléchi aux fonctionnalités à intégrer dans le réseau social :
- *9GAG* pour que les employés puissent partager et commenter des gifs ;
- *Reddit* pour que les employés puissent écrire et/ou partager des articles sur des sujets qui les intéressent.   
**ATTENTION** : le but de ce projet ne consiste pas à utiliser les API de 9GAG ou de Reddit, mais à créer une application qui s'en inspire.   

### Mission ###
Dans l'optique de s'assurer que nous répondons à leurs attentes, **Groupomania** souhaite que l'un de ses employés puisse tester un **MVP du produit**, avec une seule des deux fonctionnalités proposées (type *9GAG* ou *Reddit*).  
Pour le stockage des données, le client souhaite utiliser une base de données relationnelles qui se manipule avec le langage **SQL**.

### Contraintes spécifiques ###
- L'utilisation d'un **framework Front-End** est requise (--> sélection de **Vue.js**) ;
- Le projet doit être codé en **JavaScript**.

### Compétences évaluées ###
- Authentifier un utilisateur et maintenir sa session ;
- Personnaliser le contenu envoyé à un client web ;
- Gérer un stockage de données à l'aide de SQL ;
- Implémenter un stockage de données sécurisé en utilisant SQL.

### Lancement de l'application ###
#### Côté frontend ####
1. Ouvrir un premier terminal dans le dossier de travail ;
2. Se positionner dans le dossier frontend avec la commande `cd frontend` ;
3. Exécuter la commande `npm install` pour installer les dépendances ;
4. Exécuter la commande `npm run serve` pour lancer le serveur et cliquer sur le lien correspondant à l'emplacement *Local*.  
#### Côté backend ####
1. Dans le dossier backend :
   - renommer le fichier *.env-deploy* en *.env* et l'ouvrir,
   - renseigner vos identifiants de connexion à MySQL,
   - renseigner vos informations de compte Super Admin (champs EMAIL et PASSWORD au minimum),
   - renseigner la clé de chiffrement du token ;
2. Ouvrir un second terminal dans le dossier de travail ;
3. Se positionner dans le dossier backend avec la commande `cd backend` ;
4. Exécuter la commande `npm install` pour installer les dépendances ;
5. Exécuter la commande `nodemon server` pour faire tourner l'API, en prenant soin d'exécuter le back-end sur <http://localhost:3000> uniquement.
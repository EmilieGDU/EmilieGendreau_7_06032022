# Parcours Développeur Web - OpenClassrooms #

## Projet n°7 - Créer un réseau social d'entreprise ##

### Scénario ###
Depuis plus d'un an, je suis développeuse chez **CONNECT-E**, une petite agence web regroupant une douzaine d'employés.  
Aujourd'hui, **Groupomania**, entreprise spécialisée dans la grande distribution et l'un des plus fidèles clients de notre agence, sollicite nos services pour concevoir un **réseau social interne** destiné à ses employés.
Le but de cet outil est d'améliorer le bien-être de ces derniers, en facilitant les interactions entre collègues via un réseau social interne moderne leur permettant de se connaître dans un cadre plus informel.    

Groupomania a déjà réfléchi aux **fonctionnalités minimales** à intégrer dans le réseau social :
- une **_page de connexion_** permettant à l'utilisateur de se connecter, ou de créer un compte s'il n'en possède pas. Pour commencer, la connexion doit se baser sur 2 uniques informations : l'adresse *email* de l'employé et un *mot de passe* ;
- une **_page d'accueil_** listant par ordre *antichronologique* l'ensemble des posts créés par les différents utilisateurs ;
- une fonctionnalité de **_création de post_**. Un post devant pouvoir contenir du texte et une image, et son auteur être en mesure de le modifier et de le supprimer ;
- un **_système de like_**, permettant à l'utilisateur de liker un post (une seule fois pour chaque post) ;
- un **_rôle d'administrateur_** permettant de faire de la modération si nécessaire, grâce à des droits de modification et de suppression de tous les posts du réseau social.    

**Détails de la fonctionnalité de connexion** : 
- les données de connexion doivent être **_sécurisées_** ;   
- une session doit **_persister_** pendant toute la durée d'activité de l'utilisateur sur l'application ;
- un utilisateur doit avoir la possibilité de **_se déconnecter_**.

### Mission ###
Dans l'optique de s'assurer que nous répondons à leurs attentes, Groupomania souhaite faire tester un **MVP** du produit à quelques employés pour valider la partie fonctionnelle.  

### Contraintes spécifiques ###
**Aspect graphique**   
Se limiter au minimum en respectant la **charte** graphique fournie par Groupomania :
- Police d'écriture
  * Lato
- Couleurs
  * Primaire : #FD2D01 
  * Secondaire : #FFD7D7
  * Tertiaire : #4E5166     
Le site doit être **responsive** sur mobile, tablette et desktop.   

**Aspect technique**   
- le projet doit être codé en **JavaScript** et respecter les standards **WCAG** ;
- l'utilisation d'un **framework Front-End** est requise (--> sélection de **Vue.js**) ;
- le choix de la **base de données** est libre (--> sélection de **MySQL**, couplée à l'utilisation de l'**ORM Sequelize**).

### Compétences évaluées ###
- Authentifier un utilisateur et maintenir sa session ;
- Implémenter un stockage de données sécurisé en utilisant une base de données ;
- Développer l'interface d'un site web grâce à un framework front-end.

### Lancement de l'application ###
Pour que l'application fonctionne correctement, veillez à respecter les instructions suivantes, dans l'ordre.
#### Frontend ####
1. Ouvrir un premier terminal dans le dossier de travail ;
2. Se positionner dans le dossier frontend avec la commande `cd frontend` ;
3. Exécuter la commande `npm install` pour installer les dépendances ;
4. Exécuter la commande `npm run serve` pour lancer le serveur et cliquer sur le lien correspondant à l'emplacement *Local*.  
#### Base de données ####
1. Se connecter à votre système de gestion de base de données relationnelles (SGBD-R) ;
2. Créer une base de données nommée `groupomania` ;
3. Importer en son sein le fichier `.sql` fourni avec les livrables du projet.
#### Backend ####
1. Dans le dossier backend :
   - renommer le fichier `.env-deploy` en `.env` et l'ouvrir,
   - renseigner vos identifiants de connexion à MySQL,
   - renseigner la clé de chiffrement du token.
2. Ouvrir un second terminal dans le dossier de travail ;
3. Se positionner dans le dossier backend avec la commande `cd backend` ;
4. Exécuter la commande `npm install` pour installer les dépendances ;
5. Exécuter la commande `nodemon server` pour faire tourner l'API, en prenant soin d'exécuter le back-end sur <http://localhost:3000> uniquement.
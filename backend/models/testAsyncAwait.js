// ####################################################################################################
// Code fichier index.models.js : Fonctionne mais erreurs car retours ne se font pas dans le bon ordre
// ####################################################################################################

// const initDb = () => {
//     return db.sequelize.sync({force: true})
//         //.then((result) => console.log(result))
//         .then(() => {
//             console.log("La base de données a été synchronisée.");
            
//             // Creating Super Admin
//             db.user.create({
//                 lastName: process.env.DB_ADMIN_NAME,
//                 email: process.env.DB_ADMIN_EMAIL,
//                 password: process.env.DB_ADMIN_PASSWORD,
//                 about: process.env.DB_ADMIN_ABOUT,
//                 imageUrl: process.env.DB_ADMIN_AVATAR_URL,
//                 isAdmin: Boolean(process.env.DB_ADMIN_STATUS)
//             })
//             .then((superAdmin) => console.log(superAdmin.toJSON()))
//             .catch((error) => console.log(`Erreur lors de la création du Super Admin => ${error}`));
    
//             // Populating tables
//             // USERS
//             initialDb.users.map((user) => {
//                 db.user.create({
//                     firstName: user.firstName,
//                     lastName: user.lastName,
//                     email: user.email,
//                     password: user.password,
//                     about: user.about,
//                     imageUrl: user.imageUrl,
//                     isAdmin: user.isAdmin
//                 })
//                 .then((user) => console.log(user.toJSON()))
//                 .catch((error) => console.log(`Erreur lors de la création de l'utilisateur => ${error}`));
//             });
    
//             // POSTS
//             initialDb.posts.map((post) => {
//                 db.post.create({
//                     UserId: post.UserId,
//                     title: post.title,
//                     body: post.body,
//                     attachment: post.attachment,
//                     likes: post.likes
//                 })
//                 .then((post) => console.log(post.toJSON()))
//                 .catch((error) => console.log(`Erreur lors de la création du post => ${error}`));
//             });
    
//             //COMMENTS
//             initialDb.comments.map((comment) => {
//                 db.comment.create({
//                     PostId: comment.PostId,
//                     UserId: comment.UserId,
//                     comment: comment.comment
//                 })
//                 .then((comment) => console.log(comment.toJSON()))
//                 .catch((error) => console.log(`Erreur lors de la création du commentaire => ${error}`));
//             });
//         })
//         .catch((error) => console.log(`La synchronisation de la base de données a échoué => ${error}`));
//     };

// ********************************************************************************************************************************************************************

// ASYNC / AWAIT

// #####################
// Essai dimanche aprem
// #####################

    // async function syncDb() {
    //     try {
    //         await db.sequelize.sync({force: true});
    //         console.log("La base de données a été synchronisée.");
    //     }
    //     catch(error) {
    //         console.log(`La synchronisation de la base de données a échoué => ${error}`);
    //     }
    // };

    // async function createAdmin() {
    //     try {
    //         let superAdmin = await db.user.create({
    //             lastName: process.env.DB_ADMIN_NAME,
    //             email: process.env.DB_ADMIN_EMAIL,
    //             password: process.env.DB_ADMIN_PASSWORD,
    //             about: process.env.DB_ADMIN_ABOUT,
    //             imageUrl: process.env.DB_ADMIN_AVATAR_URL,
    //             isAdmin: Boolean(process.env.DB_ADMIN_STATUS)
    //         });
    //         console.log(superAdmin.toJSON());
    //     }
    //     catch(error) {
    //         console.log(`Erreur lors de la création du Super Admin => ${error}`);
    //     }
    // };
    

    // async function initDb() {
    //     await syncDb();
    //     await createAdmin();
    //     await createUsers();
    //     await createPosts();
    //     await createComments();
    // };

    // initDb();



// #####################
// Essai dimanche soir
// #####################
// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises

// async function initDb() {
//     try {
//         // Synchronizing database
//         const syncDb = await db.sequelize.sync({force: true}); 
        
//         // Creating Super Admin
//         await db.user.create({
//             lastName: process.env.DB_ADMIN_NAME,
//             email: process.env.DB_ADMIN_EMAIL,
//             password: process.env.DB_ADMIN_PASSWORD,
//             about: process.env.DB_ADMIN_ABOUT,
//             imageUrl: process.env.DB_ADMIN_AVATAR_URL,
//             isAdmin: Boolean(process.env.DB_ADMIN_STATUS)
//         });
        
//         // Populating tables
//         // USERS
//         initialDb.users.map((user) => {
//             await db.user.create({
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 password: user.password,
//                 about: user.about,
//                 imageUrl: user.imageUrl,
//                 isAdmin: user.isAdmin
//             })
//         });

//         // POSTS
//         initialDb.posts.map((post) => {
//             await db.post.create({
//                 UserId: post.UserId,
//                 title: post.title,
//                 body: post.body,
//                 attachment: post.attachment,
//                 likes: post.likes
//             })
//         });

//         // COMMENTS
//         initialDb.comments.map((comment) => {
//             await db.comment.create({
//                 PostId: comment.PostId,
//                 UserId: comment.UserId,
//                 comment: comment.comment
//             })
//         });
        
//         console.log("La base de données a été synchronisée.");
//         return syncDb;
//     }
//     catch(error) {
//         console.log(`La synchronisation de la base de donnée a échoué : ${error}`);
//     }
// };

// ###########################
// Message d'erreur console : 
// ###########################
// D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\models\index.models.js:87
//                 await db.user.create({
//                 ^^^^^

// SyntaxError: await is only valid in async functions and the top level bodies of modules
//     at Object.compileFunction (node:vm:352:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1032:15)
//     at Module._compile (node:internal/modules/cjs/loader:1067:27)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Module.require (node:internal/modules/cjs/loader:1005:19)
//     at require (node:internal/modules/cjs/helpers:102:18)
//     at Object.<anonymous> (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\app.js:8:12)
//     at Module._compile (node:internal/modules/cjs/loader:1103:14)
// [nodemon] app crashed - waiting for file changes before starting...



// #####################
//   Essai lundi aprem
// #####################

// async function syncDb() {
//     try {
//         let promise = db.sequelize.sync({force: true});
//         let result = await promise;
//         console.log("La base de données a été synchronisée.");
//         return result;
//     } 
//     catch(error) {
//         console.log(`La synchronisation de la base de données a échoué => ${error}`);
//     }
// };

// async function createAdmin() {
//     try {
//         let promise = db.user.create({
//             lastName: process.env.DB_ADMIN_NAME,
//             email: process.env.DB_ADMIN_EMAIL,
//             password: process.env.DB_ADMIN_PASSWORD,
//             about: process.env.DB_ADMIN_ABOUT,
//             imageUrl: process.env.DB_ADMIN_AVATAR_URL,
//             isAdmin: Boolean(process.env.DB_ADMIN_STATUS)
//         })
//         let superAdmin = await promise;
//         console.log(superAdmin.toJSON());
//         return superAdmin;
//     }
//     catch(error) {
//         console.log(`Erreur lors de la création du Super Admin => ${error}`);
//     }
// };

// async function createUsers() {
//     try {
//         let promise = initialDb.users.map((user) => {
//             db.user.create({
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 password: user.password,
//                 about: user.about,
//                 imageUrl: user.imageUrl,
//                 isAdmin: user.isAdmin
//             })
//         });
//         let user = await promise;
//         console.log(user.toJSON())
//         return user;
//     }
//     catch(error) {
//         console.log(`Erreur lors de la création de l'utilisateur => ${error}`);
//     }
// };

// async function createPosts() {
//     try {
//         let promise = initialDb.posts.map((post) => {
//             db.post.create({
//                 UserId: post.UserId,
//                 title: post.title,
//                 body: post.body,
//                 attachment: post.attachment,
//                 likes: post.likes
//             })
//         });
//         let post = await promise;
//         console.log(post.toJSON());
//         return post;
//     }
//     catch(error) {
//         console.log(`Erreur lors de la création du post => ${error}`);
//     }
// };

// async function createComments() {
//     try {
//         let promise = initialDb.comments.map((comment) => {
//             db.comment.create({
//                 PostId: comment.PostId,
//                 UserId: comment.UserId,
//                 comment: comment.comment
//             })
//         });
//         let comment = await promise;
//         console.log(comment.toJSON());
//         return comment;
//     }
//     catch(error) {
//         console.log(`Erreur lors de la création du commentaire => ${error}`);
//     }
// };


// const initDb = () => {
//     syncDb();
//     createAdmin();
//     createUsers();
//     createPosts();
//     createComments();
// };


// #############################################
// Toujours des erreurs de contenu dupliqué !!!
// Message d'erreur console : 
// #############################################


// original: Error: Duplicate entry 'b.durand-drh@groupomania.com' for key 'users.email'
//       at Packet.asError (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\node_modules\mysql2\lib\packets\packet.js:728:17)
//       at Execute.execute (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\node_modules\mysql2\lib\commands\command.js:29:26)        
//       at Connection.handlePacket (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\node_modules\mysql2\lib\connection.js:456:32)     
//       at PacketParser.onPacket (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\node_modules\mysql2\lib\connection.js:85:12)        
//       at PacketParser.executeStart (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\node_modules\mysql2\lib\packet_parser.js:75:16) 
//       at Socket.<anonymous> (D:\GDU\Dev_Web_OCR\Parcours\P7 - Creer un reseau social d_entreprise\5 - Livrables\EmilieGendreau_7_06032022\backend\node_modules\mysql2\lib\connection.js:92:25)
//       at Socket.emit (node:events:520:28)
//       at addChunk (node:internal/streams/readable:315:12)
//       at readableAddChunk (node:internal/streams/readable:289:9)
//       at Socket.Readable.push (node:internal/streams/readable:228:10) {
//     code: 'ER_DUP_ENTRY',
//     errno: 1062,
//     sqlState: '23000',
//     sqlMessage: "Duplicate entry 'b.durand-drh@groupomania.com' for key 'users.email'",
//     sql: 'INSERT INTO `Users` (`id`,`firstName`,`lastName`,`email`,`password`,`about`,`imageUrl`,`isAdmin`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?);',
//     parameters: [
//       'Bénédicte',
//       'DURAND',
//       'b.durand-drh@groupomania.com',
//       'P455W0rd',
//       "DRH de l'entreprise, j'ai à coeur de vous accompagner dans votre épanouissement au travail.",
//       '../images/default_img.png',



// **************************************************************************************************************************************************************

// CHAINAGE DES PROMESSES

// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises#encha%C3%AEner_les_promesses

// 
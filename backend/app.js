const express = require("express");
const morganMiddleware = require("./src/middlewares/morgan.middleware");
const logger = require("./src/utils/logger"); // Winston = logging library for Node.js.
const helmet = require("helmet");
const sequelize = require("./config/db.config");

const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const Like = require("./models/Like");


// #########################################################
//           Creation of the Express application
// #########################################################

const app = express();


// #########################################################
//         Testing the connection to the database
// #########################################################

sequelize.authenticate()
    .then(() => console.log("La connexion à MySQL est établie."))
    .catch((error) => console.log(`La connexion à MySQL a échoué => ${error}`));

// #########################################################
//          Creating the Sequelize associations
// #########################################################

// ONE-TO-MANY RELATIONSHIPS

// The main way to do a one-to-many relationship is to use a pair of Sequelize associations 
// ("hasMany" and "belongsTo") in order to make sure that the relationship is mandatory.

// Various options can be passed as a second parameter of the association call, like "onDelete" and ""onUpdate".
// Their defaults values are "SET NULL" for "ON DELETE" and "CASCADE" for "ON UPDATE".

User.hasMany(Post);
Post.belongsTo(User); // Delete if a post can exists without an associated user

User.hasMany(Comment);
Comment.belongsTo(User); // Delete if a comment can exists without an associated user

Post.hasMany(Comment);
Comment.belongsTo(Post); 

// MANY-TO-MANY RELATIONSHIPS

// Since a String is given in the "through" option of the "belongsToMany" call, 
// Sequelize will automatically create the "Like" Model which will act as the junction model.
// This will be an extra model (and extra table in the database) which will have two foreign key columns
// and will keep track of the associations.

User.belongsToMany(Post, { through: Like });
Post.belongsToMany(User, { through: Like });

// #########################################################
//     Synchronizing all models at once in the database
// #########################################################

// !!! Beware !!!
// .sync({force: true}) can be destructive operation.
// Therefore, it is not recommended for production-level software.
// Instead, synchronization should be done with advanced concept of Migrations, with the help of the Sequelize CLI.

sequelize.sync({force: true})
    .then(() => console.log("La base de données a été synchronisée."))
    //.then((result) => console.log(result))
    .catch((error) => console.log(`La synchronisation de la base de données a échoué => ${error}`));


// #########################################################
//             Securing the Express application
//  General middlewares applying to all routes (use method)
// #########################################################

// Setting security-related HTTP headers to protect the app from some web vulnerabilities
app.use(helmet());

// CORS error prevention
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

// #########################################################
//                 Adding logging system
// #########################################################

// Add of the Morgan middleware
app.use(morganMiddleware);

// Use of Winston.
// The Morgan middleware does not need this. This is for a manual log.
app.use((req, res) => {
    logger.info("Checking the API status --> everything is OK");
    res.status(200).send({
        status:"UP",
        message: "The API is up and running."
    });
});

// #########################################################
//                Configuring the application
// #########################################################

// Allowing access to the body of the request contained in req.body (when content-type = application/json)
app.use(express.json());


module.exports = app;
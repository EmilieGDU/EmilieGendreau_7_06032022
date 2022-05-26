const { DataTypes } = require("sequelize"); // Import the built-in data types
const sequelize = require("../config/db.config"); // Connection to the database

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") }); // Loading environment variables (from .env file into process.env)

const User = require("./User.model");
const Post = require("./Post.model");
const Comment = require("./Comment.model");
const Like = require("./Like.model");

const initialDb = require("./initial.database");


// #########################################################
//                  Creating the database
// #########################################################

const db = {
    datatypes: DataTypes,
    sequelize: sequelize,
    user: User,
    post: Post,
    comment: Comment,
    like: Like
};

// #########################################################
//            Adding the Sequelize associations
// #########################################################

// ONE-TO-MANY RELATIONSHIPS

// The main way to do a one-to-many relationship is to use a pair of Sequelize associations 
// ("hasMany" and "belongsTo") in order to make sure that the relationship is mandatory.

// Various options can be passed as a second parameter of the association call, like "onDelete" and ""onUpdate".
// Their defaults values are "SET NULL" for "ON DELETE" and "CASCADE" for "ON UPDATE".

db.user.hasMany(db.post);
db.post.belongsTo(db.user); // Delete if a post can exists without an associated user

db.user.hasMany(db.comment);
db.comment.belongsTo(db.user); // Delete if a comment can exists without an associated user

db.post.hasMany(db.comment);
db.comment.belongsTo(db.post); 

// MANY-TO-MANY RELATIONSHIPS

// Since a String is given in the "through" option of the "belongsToMany" call, 
// Sequelize will automatically create the "Like" Model which will act as the junction model.
// This will be an extra model (and extra table in the database) which will have two foreign key columns
// and will keep track of the associations.

db.user.belongsToMany(db.post, { through: db.like });
db.post.belongsToMany(db.user, { through: db.like });

// #########################################################
//     Synchronizing all models at once in the database
// #########################################################

// !!! Beware !!!
// .sync({force: true}) can be destructive operation.
// Therefore, it is not recommended for production-level software.
// Instead, synchronization should be done with advanced concept of Migrations, with the help of the Sequelize CLI.

const initDb = async function() {
    try {
        const syncDb = await db.sequelize.sync({force: true});
        if(syncDb) {
            console.log("La base de données a été synchronisée.");
        };

        const superAdminIsExisting = await db.user.findOne({where: {email: process.env.DB_ADMIN_EMAIL}});
        if(!superAdminIsExisting) {
            // Creating Super Admin
            const superAdmin = await db.user.create({
                lastName: process.env.DB_ADMIN_NAME,
                email: process.env.DB_ADMIN_EMAIL,
                password: process.env.DB_ADMIN_PASSWORD,
                about: process.env.DB_ADMIN_ABOUT,
                imageUrl: process.env.DB_ADMIN_AVATAR_URL,
                isAdmin: Boolean(process.env.DB_ADMIN_STATUS)
            });
            if(superAdmin) {
                console.log(superAdmin.toJSON());
            };
        };

        // Populating tables
        // USERS
        await Promise.all(initialDb.users.map(async function(user) {
            const dbUser = await db.user.create(user);
            // The previous instruction is the same as :
            // const dbUser = await db.user.create({
            //     firstName: user.firstName,
            //     lastName: user.lastName,
            //     email: user.email,
            //     password: user.password,
            //     about: user.about,
            //     imageUrl: user.imageUrl,
            //     isAdmin: user.isAdmin
            // }); 
            if(dbUser) {
                console.log(dbUser.toJSON());
            };
            return dbUser;                  
        }));

        // POSTS
        await Promise.all(initialDb.posts.map(async function(post) {
            const dbPost = await db.post.create(post);
            if(dbPost) {
                console.log(dbPost.toJSON());
            };
            return dbPost;
        }));

        // COMMENTS
        await Promise.all(initialDb.comments.map(async function(comment) {
            const dbComment = await db.comment.create(comment);
            if(dbComment) {
                console.log(dbComment.toJSON());
            }
            return dbComment;
        }));
    } 
    catch(error) {
        console.log(error.message);
    };
};

module.exports = {db, initDb};
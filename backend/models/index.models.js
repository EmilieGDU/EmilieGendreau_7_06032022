const { DataTypes } = require("sequelize"); // Import the built-in data types
const sequelize = require("../config/db.config");

const User = require("./User.model");
const Post = require("./Post.model");
const Comment = require("./Comment.model");
const Like = require("./Like.model");

// #########################################################
//           Creating and visualizing the database
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
//           Creating the Sequelize associations
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

module.exports = db;
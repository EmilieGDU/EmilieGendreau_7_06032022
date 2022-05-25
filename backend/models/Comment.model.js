const { DataTypes } = require("sequelize"); // Import the built-in data types
const sequelize = require("../config/db.config"); // Connection to the database
// const Post = require("./Post.model");
// const User = require("./User.model");

const Comment = sequelize.define(
    "Comment", 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // Creation of the foreign keys
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Post, // This is a reference to another model
        //         key: "id"  // This is the column name of the referenced model 
        //     }
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: User, // This is a reference to another model
        //         key: "id"  // This is the column name of the referenced model 
        //     }
        // },
        // Customization of timestamp data
        createdAt: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        },
        // Customization of timestamp data
        updatedAt: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING(510)
        }  
    },
    // By default, Sequelize automatically adds the fields createdAt and updatedAt to every model.
    // Below, this behavior is disabled for the model with the "timestamps: false" option 
    // since the timestamp datas were customized in the model description.
    {
        timestamps: false
    }
);

module.exports = Comment;
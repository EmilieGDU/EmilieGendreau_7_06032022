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
            type: DataTypes.STRING(510),
            allowNull: false,
            validate: {
                notEmpty: { msg: "Vous ne pouvez pas publier de commentaire vide." }, // Don't allow empty strings
                notNull: { msg: "Le commentaire est une propriété requise." } // Don't allow null (= no value)
            }
        },
        // #####################################################################################################################
        // In our code, foreign keys are created automatically thanks to Sequelize associations made in the index.models.js file
        // If you want to create the foreign keys manually, uncomment the code below.
        
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
        // }
        // #################################################################################################################### 
    },
    // By default, Sequelize automatically adds the fields createdAt and updatedAt to every model.
    // Below, this behavior is disabled for the model with the "timestamps: false" option 
    // since the timestamp datas were customized in the model description.
    {
        timestamps: false
    }
);

module.exports = Comment;
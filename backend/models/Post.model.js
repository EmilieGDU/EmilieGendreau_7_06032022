const { DataTypes } = require("sequelize"); // Import the built-in data types
const sequelize = require("../config/db.config"); // Connection to the database
// const User = require("./User.model");

const Post = sequelize.define(
    "Post", 
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
        title: {
            type: DataTypes.STRING(255)
        },
        body: {
            type: DataTypes.TEXT
        },
        attachment: {
            type: DataTypes.STRING(255),
            // validate: {
            //     isUrl: { msg: "Renseignez une URL valide pour la pièce-jointe." } // Checks for URL format (https://foo.com)
            // }
        },
        // #####################################################################################################################
        // In our code, foreign keys are created automatically thanks to Sequelize associations made in the index.models.js file
        // If you want to create the foreign keys manually, uncomment the code below.
        
        // Creation of the foreign key
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
        timestamps: false,
        // Model validator method
        validate: {
            isPostValid() {
                if ((this.body == "") && ( this.attachment == undefined)) {
                    throw new Error("Le Post à publier doit contenir au minimum un texte ou une pièce-jointe.");
                };
            }
        }
    }
);

module.exports = Post;
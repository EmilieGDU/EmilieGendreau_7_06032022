const { DataTypes } = require("sequelize"); // Import the built-in data types
const sequelize = require("../config/db.config"); // Connection to the database

const User = sequelize.define(
    "User", 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // firstName: {
        //     type: DataTypes.STRING(100)
        // },
        // lastName: {
        //     type: DataTypes.STRING(100),
        //     allowNull: true,
        //     validate: {
        //         notEmpty: { msg: "Le nom doit être renseigné." }, // Don't allow empty strings
        //         notNull: { msg: "Le nom est une propriété requise." } // Don't allow null (= no value)
        //     }
        // },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            //unique: true,
            unique: { msg: "Cette adresse email est déjà utilisée." },
            validate: {
                isEmail: { msg: "L'adresse email doit être valide." }, // Checks for email format (foo@bar.com)
                notEmpty: { msg: "L'adresse email doit être renseignée." }, // Don't allow empty strings
                notNull: { msg: "L'adresse email est une propriété requise." } // Don't allow null (= no value)
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le mot de passe doit être renseigné." }, // Don't allow empty strings
                notNull: { msg: "Le mot de passe est une propriété requise." } // Don't allow null (= no value)
            }
        },
        // about: {
        //     type: DataTypes.STRING(255)
        // },
        // imageUrl: {
        //     type: DataTypes.STRING(255),
        //     defaultValue: "../images/default_img.png",
        //     validate: {
        //         isUrl: { msg: "Renseignez une URL valide pour l'image." } // Checks for URL format (https://foo.com)
        //     }
        // },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
);

module.exports = User;
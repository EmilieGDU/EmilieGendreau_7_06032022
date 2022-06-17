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
        firstName: {
            type: DataTypes.STRING(100)
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le nom doit être renseigné." },
                notNull: { msg: "Le nom est une propriété requise." }
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            //unique: true,
            unique: { msg: "Cette adresse email est déjà utilisée." },
            validate: {
                isEmail: { msg: "L'adresse email doit être valide." },
                notEmpty: { msg: "L'adresse email doit être renseignée." },
                notNull: { msg: "L'adresse email est une propriété requise." }
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le mot de passe doit être renseigné." },
                notNull: { msg: "Le mot de passe est une propriété requise." }
            }
        },
        about: {
            type: DataTypes.STRING(255)
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            defaultValue: "../images/default_img.png",
            // validate: {
            //     isUrl: { msg: "Renseignez une URL valide pour l'image." }
            // }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
);

module.exports = User;
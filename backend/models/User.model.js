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
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        about: {
            type: DataTypes.STRING(255)
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            defaultValue: "../images/default_img.png"
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
);

module.exports = User;
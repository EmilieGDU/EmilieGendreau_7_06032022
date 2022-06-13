const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Importing Sequelize model (to facilitate interactions with the database)
const User = require("../models/User.model");


// ################################################
// Controllers related to authentication management
// ################################################

exports.signup = (req, res, next) => {
    // Password encryption with salting over 10 turns
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash // Storing the hashed password
        })
        .then((user) => {
            const message = `Le nouvel utilisateur '${ user.firstName } ${ user.lastName }' a été créé.`;
            res.status(201).json({ message, data: user });
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
    .then((user) => {
        if (!user) {
            return res.status(401).json({ error : "Erreur d'authentification." }); // Generic error message to avoid directing a potential hacker
        };
        // Comparison of the hashed password with the password entered by the user
        bcrypt.compare(req.body.password, user.password)
        .then((valid) => {
            if (!valid) {
                return res.status(401).json({ error : "Erreur d'authentification." }); // Generic error message to avoid directing a potential hacker
            };
            res.status(200).json({ 
                message: "Utilisateur authentifié.",
                userId: user.id,
                // Encoding a new token
                token: jwt.sign(
                    { userId: user.id },
                    process.env.tokenKey,
                    { expiresIn: "24h" }
                )
            });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};


// #################################################################
// CRUD Implementation with exploitation of the Sequelize data model
// Controllers related to users management
// #################################################################

// C like CREATE
exports.createUser = (req, res, next) => {
    User.create(req.body)
    .then((user) => {
        const message = `L'utilisateur '${ user.firstName } ${ user.lastName }' a été enregistré.`;
        res.status(201).json({ message, data: user });
    })
    .catch((error) => res.status(400).json({ error }));
};


// R like READ
exports.getAllUsers = (req, res, next) => {
    User.findAll()
    .then((users) => {
        const message = "L'ensemble des utilisateurs a été récupéré.";
        res.status(200).json({ message, data: users });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    User.findByPk(req.params.id)
    .then((user) => {
        if (user === null) {
            const message = "Utilisateur non trouvé.";
            return res.status(404).json({ message });
        } 
        else {
            const message = "Un utilisateur a été récupéré.";
            return res.status(200).json({ message, data: user });
        };
    })
    .catch((error) => res.status(404).json({ error }));
};


// U like UPDATE
exports.modifyUser = (req, res, next) => {
    const userId = req.params.id;
    User.findByPk(userId)
    .then((user) => {
        if (user === null) {
            const message = "Utilisateur non trouvé.";
            return res.status(404).json({ message });
        }
        if (user.id != req.auth.userId) {
            const message = "Requête non autorisée.";
            return res.status(401).json({ message });
        } 
        User.update(req.body, { where: { id: userId } })
        .then(() => {
            User.findByPk(userId)
            .then((updatedUser) => {
                const message = `L'utilisateur '${ updatedUser.firstName } ${ updatedUser.lastName }' a été modifié.`;
                res.status(200).json({ message, data: updatedUser });
            })
        })
        .catch((error) => res.status(400).json({ error })); 
    })
    .catch((error) => res.status(400).json({ error }));
};


// D like DELETE
exports.deleteUser = (req, res, next) => {
    const userId = req.params.id;
    User.findByPk(userId)
    .then((user) => {
        if (user === null) {
            const message = "Utilisateur non trouvé.";
            return res.status(404).json({ message });
        }
        if (user.id != req.auth.userId) {
            const message = "Requête non autorisée.";
            return res.status(401).json({ message });
        }
        if ((user.isAdmin = true) || (user.id = req.auth.userId)) { 
            const deletedUser = user;
            User.destroy({ where: {id: userId} })
            .then(() => {
                const message = `L'utilisateur avec l'identifiant '${ deletedUser.id }' a été supprimé.`;
                res.status(200).json({ message, deletedData: deletedUser });
            })
            .catch((error) => res.status(400).json({ error }));
        } 
    })
    .catch((error) => res.status(400).json({ error }));
};
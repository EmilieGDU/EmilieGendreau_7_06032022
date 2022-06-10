// Importing Sequelize model (to facilitate interactions with the database)
const User = require("../models/User.model");


// #################################################################
// CRUD Implementation with exploitation of the Sequelize data model
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
            res.status(404).json({ message });
        } 
        else {
            const message = "Un utilisateur a été récupéré.";
            res.status(200).json({ message, data: user });
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
            res.status(404).json({ message });
        } 
        else {
            User.update(req.body, { where: {id: userId} })
            .then(() => {
                User.findByPk(userId)
                .then((updatedUser) => {
                    const message = `L'utilisateur '${ updatedUser.firstName } ${ updatedUser.lastName }' a été modifié.`;
                    res.status(200).json({ message, data: updatedUser });
                })
            })
            .catch((error) => res.status(400).json({ error })); 
        };
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
            res.status(404).json({ message });
        } 
        else {
            const deletedUser = user;
            User.destroy({ where: {id: userId} })
            .then(() => {
                const message = `L'utilisateur avec l'identifiant '${ deletedUser.id }' a été supprimé.`;
                res.status(200).json({ message, deletedData: deletedUser });
            })
            .catch((error) => res.status(400).json({ error })); 
        };
    })
    .catch((error) => res.status(400).json({ error }));
};
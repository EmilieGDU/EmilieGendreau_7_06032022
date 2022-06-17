const jwt = require("jsonwebtoken");

// Authentication middleware implementation
module.exports = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;        
        if (!authorizationHeader) {
            throw "Ajoutez un jeton d'authentification dans l'en-tête de la requête.";
        };

        const token = authorizationHeader.split(" ")[1];
        // Decoding token and checking its validity
        jwt.verify(token, process.env.tokenKey, (error, decodedToken) => {
            if (error) {
                throw "L'utilisateur n'est pas autorisé à accéder à cette ressource.";
            };

            const userId = decodedToken.userId;
            // Adding an auth object to the request object, which contains the userId extracted from the token
            // The addition within a middleware makes it available for all the following middlewares
            req.auth = { userId: userId };
            if (req.body.userId && req.body.userId !== userId) {
                throw "Identifiant d'utilisateur non valable.";
            }
            else {
                next();
            }
        });
    }
    catch(error) {
        res.status(401).json({ error: error || "Requête non authentifiée." });
    }
};
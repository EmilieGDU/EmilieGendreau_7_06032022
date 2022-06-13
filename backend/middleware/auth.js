const jwt = require("jsonwebtoken");

// Authentication middleware implementation
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // Checking the validity of the token
        const decodedToken = jwt.verify(token, process.env.tokenKey);
        const userId = decodedToken.userId;
        // Adding an auth object to the request object which contains the userId extracted from the token
        // The addition within a middleware makes it available for all the following middlewares
        req.auth = { userId: userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "Identifiant d'utilisateur non valable.";
        }
        else {
            next();
        }
    }
    catch(error) {
        res.status(401).json({ error: error || "Requête non authentifiée." });
    }
};
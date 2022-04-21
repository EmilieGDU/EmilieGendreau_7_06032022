const express = require("express");
const helmet = require("helmet");
const morganMiddleware = require("./src/middlewares/morgan.middleware");
const logger = require("./src/utils/logger"); // Winston = logging library for Node.js. 

// Creation of the Express app
const app = express();

// #########################
// Securing the Express app
// #########################

// Setting security-related HTTP headers to protect the app from some web vulnerabilities
app.use(helmet());

// CORS error prevention (use method to apply to all routes)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

// ######################
// Adding logging system
// ######################

// Add of the Morgan middleware
app.use(morganMiddleware);

// Use of Winston.
// The Morgan middleware does not need this. This is for a manual log.
app.use((req, res) => {
    logger.info("Checking the API status --> everything is OK");
    res.status(200).send({
        status:"UP",
        message: "The API is up and running."
    });
});

module.exports = app;
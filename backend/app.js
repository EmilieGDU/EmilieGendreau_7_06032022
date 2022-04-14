const express = require("express");
const morganMiddleware = require("./src/middlewares/morgan.middleware");

// The Morgan middleware does not need this.
// This is for a manual log.
const logger = require("./src/utils/logger");

// Creation of the Express app
const app = express();

// Add of the Morgan middleware
app.use(morganMiddleware);

app.use((req, res) => {
    logger.info("Checking the API status --> everything is OK");
    res.status(200).send({
        status:"UP",
        message: "The API is up and running."
    });
});

module.exports = app;
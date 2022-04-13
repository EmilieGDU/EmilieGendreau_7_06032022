const express = require("express");
const morgan = require("morgan");

// Creation of the Express app
const app = express();

// HTTP request logger
// Concise output, colored by response status, for development use
app.use(morgan("dev"));

app.use((req, res) => {
    res.json({message: "Votre requête a bien été reçue."})
});

module.exports = app;
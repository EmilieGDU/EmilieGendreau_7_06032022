const express = require("express");
const morganMiddleware = require("./src/middlewares/morgan.middleware");
const logger = require("./src/utils/logger"); // Winston = logging library for Node.js.
const helmet = require("helmet");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, ".env") }); // Loading environment variables (from .env file into process.env)

const db = require("./models/index.models");

const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");

// #########################################################
//            Creating the Express application
// #########################################################

const app = express();


// ##########################################################
// Automatic database initialization (Development phase only)
// ##########################################################

// Uncomment the line below during development
// Allows automatic database population on each server restart
// db.initDb();


// #########################################################
//             Securing the Express application
//  General middlewares applying to all routes (use method)
// #########################################################

// Setting security-related HTTP headers to protect the app from some web vulnerabilities
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// CORS error prevention
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});


// #########################################################
//                 Adding logging system
// #########################################################

// Add of the Morgan middleware
app.use(morganMiddleware);

// Use of Winston.
// The Morgan middleware does not need this. This is for a manual log.
app.get("/api/status", (req, res) => {
    logger.info("Checking the API status --> everything is OK");
    res.status(200).send({
        status:"UP",
        message: "The API is up and running."
    });
});


// #########################################################
//                Configuring the application
// #########################################################

// Parsing requests of content-type = application/json
// Allowing access to the body of the request contained in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express.static() inbuilt method to serve the files contained into the images directory for each request to the "/images" route.
// path.join(__dirname, "images") to serve the absolute path (because the path provided must relate to the directory from which the Node process is started).
app.use("/images", express.static(path.join(__dirname, "images")));

// Registering the main routes of the application
// and assigning the corresponding routers
app.use("/api/auth", usersRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes); 


module.exports = app;
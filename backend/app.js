const express = require("express");
const morganMiddleware = require("./src/middlewares/morgan.middleware");
const logger = require("./src/utils/logger"); // Winston = logging library for Node.js.
const helmet = require("helmet");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, ".env") }); // Loading environment variables (from .env file into process.env)

const db = require("./models/index.models");
const User = require("./models/User.model");
const Post = require("./models/Post.model");
const Comment = require("./models/Comment.model");


// #########################################################
//            Creating the Express application
// #########################################################

const app = express();


// #########################################################
//                Initializing the database
// #########################################################

db.initDb();


// #########################################################
//             Securing the Express application
//  General middlewares applying to all routes (use method)
// #########################################################

// Setting security-related HTTP headers to protect the app from some web vulnerabilities
app.use(helmet());

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

// Allowing access to the body of the request contained in req.body (when content-type = application/json)
app.use(express.json());


// Registering the main routes of the application

// app.use("/api/auth");

// CREATE
app.post("/api/users", (req, res, next) => {
    User.create(req.body)
    .then((user) => {
        const message = `L'utilisateur '${ user.firstName } ${ user.lastName }' a été enregistré.`;
        res.status(201).json({ message, data: user });
    })
    .catch((error) => res.status(400).json({ error }));
});

app.post("/api/posts", (req, res, next) => {
    Post.create(req.body)
    .then((post) => {
        const message = `Le post intitulé '${ post.title }' a été enregistré.`;
        res.status(201).json({ message, data: post });
    })
    .catch((error) => res.status(400).json({ error }));
});

app.post("/api/posts/:id/comments", (req, res, next) => {
    Comment.create(req.body)
    .then(() => res.status(201).json({ message: "Commentaire enregistré." }))
    .catch((error) => res.status(400).json({ error }));
});

// READ
app.get("/api/posts", (req, res, next) => {
    Post.findAll()
    .then((posts) => {
        const message = "L'ensemble des posts a été récupéré.";
        res.status(200).json({ message, data: posts });
    })
    .catch((error) => res.status(404).json({ error }));
});

app.get("/api/posts/:id", (req, res, next) => {
    Post.findByPk(req.params.id)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        } 
        else {
            const message = "Un post a été récupéré.";
            res.status(200).json({ message, data: post });
        };
    })
    .catch((error) => res.status(404).json({ error }));
});

app.get("/api/posts/:id/comments", (req, res, next) => {
    Comment.findAll({ where: { PostId: req.params.id} })
    .then((comments) => {
        if (comments.length === 0) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        } 
        else {
            const message = "L'ensemble des commentaires a été récupéré.";
            res.status(200).json({ message, data: comments });
        }
    })
    .catch((error) => res.status(404).json({ error }));
});

// UPDATE

app.put("/api/users/:id", (req,res, next) => {
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
});

app.put("/api/posts/:id", (req,res, next) => {
    const postId = req.params.id;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        } 
        else {
            Post.update(req.body, { where: {id: postId} })
            .then(() => {
                Post.findByPk(postId)
                .then((updatedPost) => {
                    const message = `Le post intitulé '${ updatedPost.title }' a été modifié.`;
                    res.status(200).json({ message, data: updatedPost });
                })
            })
            .catch((error) => res.status(400).json({ error })); 
        };
    })
    .catch((error) => res.status(400).json({ error }));
});

app.put("/api/posts/:id/comments/:id", (req,res, next) => {

});

// DELETE

app.delete("/api/users/:id", (req,res, next) => {

});

app.delete("/api/posts/:id", (req,res, next) => {

});

app.delete("/api/comments/:id", (req,res, next) => {

});


module.exports = app;
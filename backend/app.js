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

// Parsing requests of content-type = application/json
// Allowing access to the body of the request contained in req.body
app.use(express.json());


// Registering the main routes of the application

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
    Post.findByPk(req.params.id)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        } 
        else {
            Comment.create(req.body)
            .then((comment) => {
                const message = "Commentaire enregistré.";
                res.status(201).json({ message, data: comment })
            })
            .catch((error) => res.status(400).json({ error }));
        };
    })
    .catch((error) => res.status(400).json({ error }));
});

// READ

app.get("/api/users", (req, res, next) => {
    User.findAll()
    .then((users) => {
        const message = "L'ensemble des utilisateurs a été récupéré.";
        res.status(200).json({ message, data: users });
    })
    .catch((error) => res.status(404).json({ error }));
});

app.get("/api/users/:id", (req, res, next) => {
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
});

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

app.put("/api/users/:id", (req, res, next) => {
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

app.put("/api/posts/:id", (req, res, next) => {
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

app.put("/api/posts/:postId/comments/:commentId", (req, res, next) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        }
        else {
            Comment.findByPk(commentId)
            .then((comment) => {
                if (comment === null) {
                    const message = "Commentaire non trouvé.";
                    res.status(404).json({ message });
                }
                else {
                    Comment.update(req.body, { where: {id: commentId} })
                    .then(() => {
                        Comment.findByPk(commentId)
                        .then((updatedComment) => {
                            const message = "Le commentaire a été modifié.";
                            res.status(200).json({ message, data: updatedComment });
                        })
                    })
                    .catch((error) => res.status(400).json({ error }));
                };
            })
            .catch((error) => res.status(400).json({ error }));
        };
    })
    .catch((error) => res.status(400).json({ error }));
});

// DELETE

app.delete("/api/users/:id", (req, res, next) => {
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
});

app.delete("/api/posts/:id", (req, res, next) => {
    const postId = req.params.id;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        } 
        else {
            const deletedPost = post;
            Post.destroy({ where: {id: postId} })
            .then(() => {
                const message = `Le post avec l'identifiant '${ deletedPost.id }' a été supprimé.`;
                res.status(200).json({ message, deletedData: deletedPost });
            })
            .catch((error) => res.status(400).json({ error })); 
        };
    })
    .catch((error) => res.status(400).json({ error }));
});

app.delete("/api/posts/:postId/comments/:commentId", (req, res, next) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        }
        else {
            Comment.findByPk(commentId)
            .then((comment) => {
                if (comment === null) {
                    const message = "Commentaire non trouvé.";
                    res.status(404).json({ message });
                }
                else {
                    const deletedComment = comment;
                    Comment.destroy({ where: {id: commentId} })
                    .then(() => {
                        const message = `Le commentaire avec l'identifiant '${ deletedComment.id }' a été supprimé.`;
                        res.status(200).json({ message, deletedData: deletedComment });
                    })
                    .catch((error) => res.status(400).json({ error }));
                };
            })
            .catch((error) => res.status(400).json({ error }));
        };
    })
    .catch((error) => res.status(400).json({ error }));
});


module.exports = app;
// Importing Sequelize model (to facilitate interactions with the database)
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model"); 

// #################################################################
// CRUD Implementation with exploitation of the Sequelize data model
// Controllers related to posts management
// #################################################################

// C like CREATE 
exports.createPost = (req, res, next) => {
    Post.create(req.body)
    .then((post) => {
        const message = `Le post intitulé '${ post.title }' a été enregistré.`;
        res.status(201).json({ message, data: post });
    })
    .catch((error) => res.status(400).json({ error }));
};


// R like READ
exports.getAllPosts = (req, res, next) => {
    Post.findAll()
    .then((posts) => {
        const message = "L'ensemble des posts a été récupéré.";
        res.status(200).json({ message, data: posts });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.getOnePost = (req, res, next) => {
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
};


// U like UPDATE
exports.modifyPost = (req, res, next) => {
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
};


// D like DELETE
exports.deletePost = (req, res, next) => {
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
};


// #################################################################
// CRUD Implementation with exploitation of the Sequelize data model
// Controllers related to comments management
// #################################################################

// C like CREATE
exports.createComment = (req, res, next) => {
    // console.log(`ReqParamspostId : ${typeof(req.params.postId)} || ReqBodypostId : ${typeof(req.body.PostId)}`);
    // console.log(req.params.postId);
    // console.log(req.body.PostId);
    Post.findByPk(req.params.postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            res.status(404).json({ message });
        }
        else if (req.params.postId != req.body.PostId) {
            const message = "Vous ne pouvez pas commenter ce post.";
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
};


// R like READ
exports.getAllComments = (req, res, next) => {
    Comment.findAll({ where: { PostId: req.params.postId} })
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
};


// U like UPDATE
exports.modifyComment = (req, res, next) => {
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
};


// D like DELETE
exports.deleteComment = (req, res, next) => {
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
};


// ###########################
// Like/Dislike Implementation
// ###########################


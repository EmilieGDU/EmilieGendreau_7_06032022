const { ValidationError } = require("sequelize");

// Importing Sequelize model (to facilitate interactions with the database)
const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model"); 
const Like = require("../models/Like.model"); 

// Importing the NodeJS fs module (to access and interact with the file system)
const fs = require("fs"); 

// #################################################################
// CRUD Implementation with exploitation of the Sequelize data model
// Controllers related to POSTS management
// #################################################################

// C like CREATE 
exports.createPost = (req, res, next) => {
    const postObject = req.file ?
        {
            ...(req.body),
            attachment: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        } : { ...req.body };
    
    Post.create(postObject)
    .then((post) => {
        const message = `Le post a été enregistré.`;
        return res.status(201).json({ message, data: post });
    })
    .catch((error) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        const message = "Le post n'a pas pu être créé. Réessayez dans quelques instants.";
        return res.status(500).json({ message, data: error });
    });
};


// R like READ
exports.getAllPosts = (req, res, next) => {
    Post.findAll({        
        order: [ ["updatedAt", "DESC"] ], 
    })
    .then((posts) => {
        const message = "L'ensemble des posts a été récupéré.";
        return res.status(200).json({ message, data: posts });
    })
    .catch((error) => { return res.status(500).json({ error }); });
};

exports.getOnePost = (req, res, next) => {
    Post.findByPk(req.params.id)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            return res.status(404).json({ message });
        } 
        else {
            const message = "Un post a été récupéré.";
            return res.status(200).json({ message, data: post });
        };
    })
    .catch((error) => { return res.status(500).json({ error }); });
};


// U like UPDATE
exports.modifyPost = (req, res, next) => {
    const postId = req.params.id;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            return res.status(404).json({ message });
        } 
        
        if (post.UserId != req.auth.userId) {
            User.findByPk(req.auth.userId)
            .then((user) => {
                if (user.isAdmin == true) {
                    const postObject = req.file ?
                    {
                        ...(req.body),
                        attachment: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
                    } : { ...req.body };
                    
                    Post.update(postObject, { where: { id: postId } })
                    .then(() => {
                        Post.findByPk(postId)
                        .then((updatedPost) => {
                            const message = `Administrateur : vous avez modifié le post avec l'identifiant '${ updatedPost.id }'.`;
                            return res.status(200).json({ message, data: updatedPost });
                        })
                        .catch((error) => { return res.status(500).json({ error }); });
                    })
                    .catch((error) => {
                        if (error instanceof ValidationError) {
                            return res.status(400).json({ message: error.message, data: error })
                        }
                        const message = "Le post n'a pas pu être modifié. Réessayez dans quelques instants.";
                        return res.status(500).json({ message, data: error });
                    });
                }
                else {
                    const message = "Requête non autorisée.";
                    return res.status(401).json({ message });
                }
            })
            .catch((error) => { return res.status(500).json({ error }); });
        }

        if (post.UserId == req.auth.userId) {
            const postObject = req.file ?
            {
                ...(req.body),
                attachment: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
            } : { ...req.body };
            
            Post.update(postObject, { where: { id: postId } })
            .then(() => {
                Post.findByPk(postId)
                .then((updatedPost) => {
                    const message = `Le post avec l'identifiant '${ updatedPost.id }' a été modifié.`;
                    return res.status(200).json({ message, data: updatedPost });
                })
                .catch((error) => { return res.status(500).json({ error }); });
            })
            .catch((error) => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = "Le post n'a pas pu être modifié. Réessayez dans quelques instants.";
                return res.status(500).json({ message, data: error });
            });
        }
    })
    .catch((error) => { return res.status(500).json({ error }); });
};


// D like DELETE
exports.deletePost = (req, res, next) => {
    const postId = req.params.id;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            return res.status(404).json({ message });
        } 
        
        if (post.UserId != req.auth.userId) {
            User.findByPk(req.auth.userId)
            .then((user) => {
                if (user.isAdmin == true) {
                    const deletedPost = post;
                    if (post.attachment) {
                        const filename = post.attachment.split("/images/")[1];
                        fs.unlink(`images/${filename}`, () => {
                            Post.destroy({ where: { id: postId } })
                            .then(() => {
                                const message = `Administrateur : vous avez supprimé le post avec l'identifiant '${ deletedPost.id }'.`;
                                return res.status(200).json({ message, deletedData: deletedPost });
                            })
                            .catch((error) => { return res.status(500).json({ error: error.message }); });
                        });
                    }
                    else {
                        Post.destroy({ where: { id: postId } })
                        .then(() => {
                            const message = `Administrateur : vous avez supprimé le post avec l'identifiant '${ deletedPost.id }'.`;
                            return res.status(200).json({ message, deletedData: deletedPost });
                        })
                        .catch((error) => { return res.status(500).json({ error: error.message }); });
                    }                                     
                }
                else {
                    const message = "Requête non autorisée.";
                    return res.status(401).json({ message });
                }
            })
            .catch((error) => { return res.status(500).json({ error }); });            
        }

        if (post.UserId == req.auth.userId) {
            const deletedPost = post;
            if (post.attachment) {
                const filename = post.attachment.split("/images/")[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.destroy({ where: {id: postId} })
                    .then(() => {
                        const message = `Le post avec l'identifiant '${ deletedPost.id }' a été supprimé.`;
                        return res.status(200).json({ message, deletedData: deletedPost });
                    })
                    .catch((error) => { return res.status(500).json({ error }); });
                });
            }
            else {
                Post.destroy({ where: {id: postId} })
                .then(() => {
                    const message = `Le post avec l'identifiant '${ deletedPost.id }' a été supprimé.`;
                    return res.status(200).json({ message, deletedData: deletedPost });
                })
                .catch((error) => { return res.status(500).json({ error }); });
            }            
        }
    })
    .catch((error) => { return res.status(500).json({ error }); });
};


// #################################################################
// CRUD Implementation with exploitation of the Sequelize data model
// Controllers related to COMMENTS management
// #################################################################

// C like CREATE
exports.createComment = (req, res, next) => {
    Post.findByPk(req.params.postId)
        .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            return res.status(404).json({ message });
        }
        // else if (req.params.postId != req.body.comment.PostId) {
        //     const message = "Vous ne pouvez pas commenter ce post.";
        //     return res.status(400).json({ message });
        // }
        else {
            Comment.create(req.body)
            .then((comment) => {
                const message = "Commentaire enregistré.";
                return res.status(201).json({ message, data: comment })
            })
            .catch((error) => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = "Le commentaire n'a pas pu être créé. Réessayez dans quelques instants.";
                return res.status(500).json({ message, data: error });
            });
        };
    })
    .catch((error) => { return res.status(500).json({ error }); });
};


// R like READ
exports.getPostComments = (req, res, next) => {
    Comment.findAndCountAll({ 
        where: { 
            PostId: req.params.postId
        },
        include: {
            model: User,
            attributes: ["email"],
        }, 
        order: [ ["updatedAt", "DESC"] ],
    })
    .then(({count, rows}) => {
        if (count == 0) {
            const message = `Aucun commentaire n'est rattaché au post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message });
        }
        else if (count == 1) {
            const message = `${count} commentaire est rattaché au post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count, rows}});
        }
        else {
            const message = `${count} commentaires sont rattachés au post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count, rows}});
        };            
    })        
    .catch((error) => {
        return res.status(500).json({ error });
    });
};


// U like UPDATE
exports.modifyComment = (req, res, next) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            return res.status(404).json({ message });
        }
        else {
            Comment.findByPk(commentId)
            .then((comment) => {
                if (comment === null) {
                    const message = "Commentaire non trouvé.";
                    return res.status(404).json({ message });
                }
                
                if (comment.PostId != postId) {
                    const message = "Vous ne pouvez pas modifier ce commentaire.";
                    return res.status(400).json({ message });
                }
                
                if (comment.UserId != req.auth.userId) {
                    User.findByPk(req.auth.userId)
                    .then((user) => {
                        if (user.isAdmin == true) {
                            Comment.update(req.body, { where: { id: commentId } })
                            .then(() => {
                                Comment.findByPk(commentId)
                                .then((updatedComment) => {
                                    const message = `Administrateur : vous avez modifié le commentaire avec l'identifiant '${ updatedComment.id }'.`;
                                    return res.status(200).json({ message, data: updatedComment });
                                })
                                .catch((error) => { return res.status(500).json({ error: error.message }); });
                            })
                            .catch((error) => {
                                if (error instanceof ValidationError) {
                                    return res.status(400).json({ message: error.message, data: error })
                                }
                                const message = "Le commentaire n'a pas pu être modifié. Réessayez dans quelques instants.";
                                return res.status(500).json({ message, data: error.message });
                            });   
                        }
                        else {
                            const message = "Requête non autorisée.";
                            return res.status(401).json({ message });
                        }
                    })
                    .catch((error) => { return res.status(500).json({ error }); });
                }

                if (comment.UserId == req.auth.userId) {
                    Comment.update(req.body, { where: { id: commentId } })
                    .then(() => {
                        Comment.findByPk(commentId)
                        .then((updatedComment) => {
                            const message = `Le commentaire avec l'identifiant '${ updatedComment.id }' a été modifié.`;
                            return res.status(200).json({ message, data: updatedComment });
                        })
                        .catch((error) => { return res.status(500).json({ error: error.message }); });
                    })
                    .catch((error) => {
                        if (error instanceof ValidationError) {
                            return res.status(400).json({ message: error.message, data: error })
                        }
                        const message = "Le commentaire n'a pas pu être modifié. Réessayez dans quelques instants.";
                        return res.status(500).json({ message, data: error.message });
                    });
                }    
            })
            .catch((error) => { return res.status(500).json({ error: error.message }); });
        };
    })
    .catch((error) => { return res.status(500).json({ error: error.message }); });
};


// D like DELETE
exports.deleteComment = (req, res, next) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    Post.findByPk(postId)
    .then((post) => {
        if (post === null) {
            const message = "Post non trouvé.";
            return res.status(404).json({ message });
        }
        Comment.findByPk(commentId)
        .then((comment) => {
            if (comment === null) {
                const message = "Commentaire non trouvé.";
                return res.status(404).json({ message });
            }

            if (comment.UserId != req.auth.userId) {
                User.findByPk(req.auth.userId)
                .then((user) => {
                    if (user.isAdmin == true) {
                        const deletedComment = comment;
                        Comment.destroy({ where: { id: commentId } })
                        .then(() => {
                            const message = `Administrateur : le commentaire avec l'identifiant '${ deletedComment.id }' a été supprimé.`;
                            return res.status(200).json({ message, deletedData: deletedComment });
                        })
                        .catch((error) => { return res.status(500).json({ error }); });
                    }
                    else {
                        const message = "Requête non autorisée.";
                        return res.status(401).json({ message });
                    }
                })
                .catch((error) => { return res.status(500).json({ error }); });            
            }

            if (comment.UserId == req.auth.userId) {
                const deletedComment = comment;
                Comment.destroy({ where: {id: commentId} })
                .then(() => {
                    const message = `Le commentaire avec l'identifiant '${ deletedComment.id }' a été supprimé.`;
                    return res.status(200).json({ message, deletedData: deletedComment });
                })
                .catch((error) => { return res.status(500).json({ error: error.message }); }); 
            }
        })
        .catch((error) => { return res.status(500).json({ error: error.message }); });
    })
    .catch((error) => { return res.status(500).json({ error: error.message }); });
};


// #################################################################
// CRD Implementation with exploitation of the Sequelize data model
// Controllers related to LIKES management
// #################################################################

// C like CREATE and D like DELETE
exports.likePost = (req, res, next) => {    
    const userId = req.params.userId;
    const postId = req.params.postId;
    Like.findAndCountAll({
        where: {
            UserId: userId,
            PostId: postId
        }
    })
    .then(({count, rows}) => {
        if (count == 1) {
            Like.destroy({
                where: {
                    UserId: userId,
                    PostId: postId
                }
            })
            .then(() => {
                const like = 0;
                const message = `Vous n'aimez plus le post ayant l'identifiant n°${postId}.`;
                return res.status(200).json({ like, message });
            })
            .catch((error) => {
                return res.status(500).json({ error });
            });
        }        
        else {
            Like.create({
                UserId: userId,
                PostId: postId
            })
            .then(() => {
                const like = 1;
                const message = `Vous aimez le post ayant l'identifiant n°${postId}.`;
                return res.status(201).json({ like, message });
            })
            .catch((error) => {
                return res.status(500).json({ error });
            });
        }
    })
    .catch((error) => {
        return res.status(500).json({ error });
    });    
};


// R like READ
exports.getUserLikes = (req, res, next) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    Like.findAndCountAll({
        where: {
            UserId: userId,
            PostId: postId
        }
    })
    .then(({count, rows}) => {
        if (count == 1) {
            const message = `L'utilisateur a liké le post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count, rows}});
        }
        else {
            const message = `L'utilisateur n'a pas liké le post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count}});
        }
    })
    .catch((error) => {
        return res.status(500).json({ error });
    });    
};

exports.getPostLikes = (req, res, next) => {
    Like.findAndCountAll({ 
        where: { 
            PostId: req.params.postId
        } 
    })
    .then(({count, rows}) => {
        if (count == 0) {
            const message = `Aucun like n'est rattaché au post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count, rows}});
        }
        else if (count == 1) {
            const message = `${count} like est rattaché au post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count, rows}});
        }
        else {
            const message = `${count} likes sont rattachés au post ayant l'identifiant n°${req.params.postId}.`;
            return res.status(200).json({ message, data: {count, rows}});
        };            
    })        
    .catch((error) => {
        return res.status(500).json({ error });
    });
};
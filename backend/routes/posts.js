const express = require("express");

// Creating an Express router
const router = express.Router();

// Importing middlewares
const auth = require("../middleware/auth");
const multer = require("../middleware/multer_config");

// Importing posts controller
const postsCtrl = require("../controllers/posts");


// Implementing individuals routes in the router
// Applying middlewares and assigning controller functions
// ==========================================================================
// Routes related to POSTS management (main segment = "/api/posts")
router.post("/", auth, multer, postsCtrl.createPost);
// router.get("/", auth, postsCtrl.getAllPosts);
router.get("/", postsCtrl.getAllPosts);
router.get("/:id", auth, postsCtrl.getOnePost);
//router.put("/:id", auth, multer, postsCtrl.modifyPost);
router.put("/:id", multer, postsCtrl.modifyPost);
//router.delete("/:id", auth, postsCtrl.deletePost);
router.delete("/:id", postsCtrl.deletePost);
// ==========================================================================
// Routes related to COMMENTS management (main segment = "/api/posts")
router.post("/:postId/comments", auth, postsCtrl.createComment);
//router.get("/:postId/comments", auth, postsCtrl.getPostComments);
router.get("/:postId/comments", postsCtrl.getPostComments);
router.put("/:postId/comments/:commentId", auth, postsCtrl.modifyComment);
router.delete("/:postId/comments/:commentId", auth, postsCtrl.deleteComment);
// ==========================================================================
// Routes related to LIKES management (main segment = "/api/posts")
//router.post("/:postId/likes", auth, postsCtrl.likePost);
router.post("/:postId/likes/:userId", postsCtrl.likePost);
//router.get("/:postId/likes", auth, postsCtrl.getUserLikes);
router.get("/:postId/likes/:userId", postsCtrl.getUserLikes);
//router.get("/:postId/likes", auth, postsCtrl.getPostLikes);
router.get("/:postId/likes", postsCtrl.getPostLikes);

module.exports = router; 
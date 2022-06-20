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
// Routes related to posts management (main segment = "/api/posts")
router.post("/", auth, multer, postsCtrl.createPost);
router.get("/", auth, postsCtrl.getAllPosts);
router.get("/:id", auth, postsCtrl.getOnePost);
router.put("/:id", auth, multer, postsCtrl.modifyPost);
router.delete("/:id", auth, postsCtrl.deletePost);
// ==========================================================================
// Routes related to comments management (main segment = "/api/posts")
router.post("/:postId/comments", auth, postsCtrl.createComment);
router.get("/:postId/comments", auth, postsCtrl.getAllComments);
router.put("/:postId/comments/:commentId", auth, postsCtrl.modifyComment);
router.delete("/:postId/comments/:commentId", auth, postsCtrl.deleteComment);


module.exports = router; 
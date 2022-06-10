const express = require("express");

// Creating an Express router
const router = express.Router();

// Importing middlewares
// const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

// Importing posts controller
const postsCtrl = require("../controllers/posts");


// Implementing individuals routes in the router
// Applying middlewares and assigning controller functions
// router.post("/api/posts", auth, multer, postCtrl.createPost);
// router.post("/api/posts/:id/like", auth, postCtrl.likePost);
// router.put("/api/posts/:id", auth, multer, postCtrl.modifyPost);
// router.delete("/api/posts/:id", auth, postCtrl.deletePost);
// router.get("/api/posts", auth, postCtrl.getAllPosts);
// router.get("/api/posts/:id", auth, postCtrl.getOnePost);

// Routes related to posts management
router.post("/", postsCtrl.createPost);
router.get("/", postsCtrl.getAllPosts);
router.get("/:id", postsCtrl.getOnePost);
router.put("/:id", postsCtrl.modifyPost);
router.delete("/:id", postsCtrl.deletePost);

// Routes related to comments management
router.post("/:postId/comments", postsCtrl.createComment);
router.get("/:postId/comments", postsCtrl.getAllComments);
router.put("/:postId/comments/:commentId", postsCtrl.modifyComment);
router.delete("/:postId/comments/:commentId", postsCtrl.deleteComment);


module.exports = router; 
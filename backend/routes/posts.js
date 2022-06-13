const express = require("express");

// Creating an Express router
const router = express.Router();

// Importing middlewares
const auth = require("../middleware/auth");
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

// Routes related to posts management (main segment = "/api/posts")
router.post("/", auth, postsCtrl.createPost);
router.get("/", auth, postsCtrl.getAllPosts);
router.get("/:id", auth, postsCtrl.getOnePost);
router.put("/:id", auth, postsCtrl.modifyPost);
router.delete("/:id", auth, postsCtrl.deletePost);

// Routes related to comments management (main segment = "/api/posts")
router.post("/:postId/comments", auth, postsCtrl.createComment);
router.get("/:postId/comments", auth, postsCtrl.getAllComments);
router.put("/:postId/comments/:commentId", auth, postsCtrl.modifyComment);
router.delete("/:postId/comments/:commentId", auth, postsCtrl.deleteComment);


module.exports = router; 
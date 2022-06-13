const express = require("express");

// Creating an Express router
const router = express.Router();

// Importing middlewares
const auth = require("../middleware/auth");
// const passwordValidator = require("../middleware/password_validator");
// const rateLimit = require("../middleware/rate_limit");


// Importing users controller
const usersCtrl = require("../controllers/users");


// Implementing individuals routes in the router
// Applying middlewares and assigning controller functions
// router.post("/api/users/signup", passwordValidator, userCtrl.signup);
// router.post("/api/users/login", rateLimit, userCtrl.login);

// Routes related to authentication management (main segment = "/api/auth")
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

// Routes related to users management (main segment = "/api/users")
router.post("/", auth, usersCtrl.createUser);
router.get("/", auth, usersCtrl.getAllUsers);
router.get("/:id", auth, usersCtrl.getOneUser);
router.put("/:id", auth, usersCtrl.modifyUser);
router.delete("/:id", auth, usersCtrl.deleteUser);


module.exports = router;
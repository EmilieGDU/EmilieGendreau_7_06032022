const express = require("express");

// Creating an Express router
const router = express.Router();

// Importing middlewares
const passwordValidator = require("../middleware/password_validator");
const rateLimit = require("../middleware/rate_limit");
const auth = require("../middleware/auth");


// Importing users controller
const usersCtrl = require("../controllers/users");


// Implementing individuals routes in the router
// Applying middlewares and assigning controller functions
// ========================================================================
// Routes related to authentication management (main segment = "/api/auth")
router.post("/signup", passwordValidator, usersCtrl.signup);
router.post("/login", rateLimit, usersCtrl.login);
// ========================================================================
// Routes related to users management (main segment = "/api/users")
router.post("/", auth, usersCtrl.createUser);
router.get("/", auth, usersCtrl.getAllUsers);
router.get("/:id", auth, usersCtrl.getOneUser);
router.put("/:id", auth, usersCtrl.modifyUser);
router.delete("/:id", auth, usersCtrl.deleteUser);


module.exports = router;
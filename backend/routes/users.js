const express = require("express");

// Creating an Express router
const router = express.Router();

// Importing middlewares
// const passwordValidator = require("../middleware/password_validator");
// const rateLimit = require("../middleware/rate_limit");

// Importing users controller
const usersCtrl = require("../controllers/users");


// Implementing individuals routes in the router
// Applying middlewares and assigning controller functions
// router.post("/api/users/signup", passwordValidator, userCtrl.signup);
// router.post("/api/users/login", rateLimit, userCtrl.login);
router.post("/", usersCtrl.createUser);
router.get("/", usersCtrl.getAllUsers);
router.get("/:id", usersCtrl.getOneUser);
router.put("/:id", usersCtrl.modifyUser);
router.delete("/:id", usersCtrl.deleteUser);


module.exports = router;
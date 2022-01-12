const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

const User = require("../models/user");

router.post("/signup", UserController.user_sign_up);

router.delete(":/userId", UserController.user_delete);

router.post("/login", UserController.user_login);

module.exports = router;

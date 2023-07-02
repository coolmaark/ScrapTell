const express = require("express");
const user_route = express();

const bodyParser = require("body-parser");
user_route.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));

const multer = require("multer");
const path = require("path");

user_route.use(express.static("public"));

const user_controller = require("../controllers/userController");

user_route.post("/register",user_controller.register_user);

module.exports = user_route;
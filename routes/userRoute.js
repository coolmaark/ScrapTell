const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
var jwt = require("jsonwebtoken");
// const fetch = require('node-fetch');
// const {axios } = require('axios');
const { body, validationResult } = require("express-validator");
const route = express.Router();

const axios = require("axios");
const { error } = require("console");

const errors = [];

const login = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/Authenticate",
      {
        email,
        password,
      }
    );

    if (response.status === 200) {
      const token = response.data.authtoken;
      return token;
    } else {
      while (errors.length > 0) {
        errors.pop();
      }
      errors.push("Login failed");
    }
  } catch (error) {
    while (errors.length > 0) {
      errors.pop();
    }
    errors.push("Login failed");
  }
};
route.post(
  "/Login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let { email, password } = req.body;
    const err = validationResult(req);
    if (!err.isEmpty()) {
      while (errors.length > 0) {
        errors.pop();
      }
      let k = err.array();
      for (var i = 0; i < k.length; i++) {
        // console.log(k[i].msg);
        errors.push(k[i].msg);
      }
      return res.render("login", { errors: errors });
    }
    let token = await login(email, password);
    if (!token) {
      return res.render("login", {
        errors: ["Please Authenticate using a valid user"],
      });
    }
    try {
      const data = jwt.verify(token, process.env.JWT_STRING);
      const user = await User.findById(data.user.id);
      console.log(user);
      const check = bcryptjs.compare(password, user.password);
      if (!check) {
        return res.render("login", { errors: ["The Password is incorrect"] });
      }

      res.redirect("/");
    } catch (err) {
      // console.log(err.message);
      res.render("login", { errors: ["Some Error occured"] });
    }
  }
);

route.post("/Signup", async (req, res) => {
  // console.log(req.body);
  let UserName = req.body.username;
  let UserEmail = req.body.email;
  let UserPassword = req.body.password;
  let hashpass = await bcryptjs.hash(UserPassword, 10);
  console.log(hashpass);
  let NewId = new User({
    username: UserName,
    email: UserEmail,
    password: hashpass,
  });
  NewId.save();
  res.redirect("/Login");
});

module.exports = route;

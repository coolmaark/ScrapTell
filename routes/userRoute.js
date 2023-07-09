const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
var jwt = require("jsonwebtoken");
// const fetch = require('node-fetch');
// const {axios } = require('axios');
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const route = express.Router();
const axios = require("axios");
// const { error } = require("console");
require("dotenv").config();
const errors = [];

const login = async (email, password) => {
  try {
    const response = await axios.post(
      process.env.BASE_URL+"/api/Authenticate",
      {
        email,
        password,
      }
    );
    // console.log(response);
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
        errors: ["Please Enter Valid Credentials"],
      });
    }
    try {
      const data = jwt.verify(token, process.env.JWT_STRING);
      const user = await User.findById(data.user.id);
      const check = bcryptjs.compare(password, user.password);
      if (!check) {
        return res.render("login", { errors: ["The Password is incorrect"] });
      }
      if (user.Is_Verified == 0) {
        return res.render("login", { errors: ["The Email Is Not Verified"] });
      }
      res.redirect("/");
    } catch (err) {
      res.render("login", { errors: ["Some Error occured"] });
    }
  }
);

const signup = async (username, email, password) => {
  // console.log(username);
  //   console.log(email);
  //   console.log(password);
  try {
    const response = await axios.post(
      process.env.BASE_URL+"/api/createNewUser",
      {
        username,
        email,
        password,
      }
    );
    // console.log(response);
    if (response.status === 200) {
      const token = response.data.authtoken;
      return token;
    } else {
      while (errors.length > 0) {
        errors.pop();
      }
      errors.push("User Already Exists");
    }
  } catch (error) {
    while (errors.length > 0) {
      errors.pop();
    }
    errors.push("Signup failed");
  }
};

const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const sendVerifyMail = async (username, email, userid) => {
  try {
    const Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".html",
        partiaLsDir: path.resolve("./views"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./views"),
      extName: ".handlebars",
    };
    Transporter.use("compile", hbs(handlebarOptions));
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "For verification To create your account in scraptel",
      template: "VerifyEmail",
      context: {
        user_id: userid,
        BASE_URL: process.env.BASE_URL,
      },
    };

    Transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email has been sent:-", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

route.post(
  "/Signup",
  [
    body("username", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // console.log(req.body);
    let { username, email, password } = req.body;
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
      return res.render("signup", { errors: errors });
    }
    let token = await signup(username, email, password);
    // console.log(token);
    if (!token) {
      return res.render("signup", {
        errors: ["Enter a valid Email"],
      });
    }
    const user = await User.findOne({ email: email });
    sendVerifyMail(username, email, user.id);
    res.redirect("/Login");
  }
);

const VerifyMail = async (req, res) => {
  try {
    // const user = await User.findOne({_id : req.query.id});
    // console.log(user);
    const updated = await User.updateOne(
      { _id: req.query.id },
      { $set: { Is_Verified: 1 } }
    );
    // console.log(updated);
    res.render("login", { errors: ["Email Verified"] });
  } catch (error) {
    console.log(error);
  }
};

route.get("/Verify", VerifyMail);

module.exports = route;

const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fetchUser = require("../middleware/FetchUser");

const router = express.Router();

router.post(
  "/createNewUser",
  [
    body("username", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // console.log(req.body);
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "The user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtdata = jwt.sign(data, process.env.JWT_STRING);
      // console.log(jwtdata);
      res.json({ authtoken: jwtdata });
    } catch (err) {
      console.log(err);
      res.status(500).send("Some Error occured");
    }
  }
);

router.post(
  "/Authenticate",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }

      const check = await bcrypt.compare(password, user.password);

      if (!check) {
        return res.status(400).json({ error: "User does not exist" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtdata = jwt.sign(data, process.env.JWT_STRING);
      // console.log(jwtdata);
      res.json({ authtoken: jwtdata });
    } catch (err) {
      console.log(err);
      res.status(500).send("Some Error occured");
    }
  }
);

router.post("/GetUser", fetchUser, async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  try {
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Some Error occured");
  }
});

module.exports = router;

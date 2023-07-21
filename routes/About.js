const express = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/UserData");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
// router.get("/c",function(req, res){
//   res.render("ContactformSubmittion")
// })
router.post("/About", async(req,res)=>{
  const {name, email, text} = req.body;
  sendVerifyMail(name, email, text);
  res.redirect("/");
})
var mailsList = [
  "anbhyd@gmail.com",
  "ravikurella1@gmail.com",
];
const sendVerifyMail = async (name, email, text) => {
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
      subject: "Query",
      template: "contactform",
      context: {
        email: email,
        name: name,
        text: text,
      },
    };
    mailsList.forEach(function (to, i , array) {
      mailOptions.to = to;
    
      Transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log("Email has been sent:-", info.response);
        }
    
        if (i === maillist.length - 1) { msg.transport.close(); }
    });
   
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = router;
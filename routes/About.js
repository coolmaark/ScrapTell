const express = require("express");
const Qurey = require("../models/Queries.js");
const router =  express.Router();

router.post("/About", async(req,res)=>{
    const {name, email, text} = req.body;

})
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

module.exports = router;
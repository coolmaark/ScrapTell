const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
var jwt = require('jsonwebtoken');
const route = express.Router();

route.post("/login",async(req,res) =>{
    const { Email, Password } = req.body;
    try{
        let user = User.findOne{(Email)};
        if(!user){
            res.send({msg : "User Does Not Exist"});
            res.redirect("/Signup");
        }
        const passwordCompare = bcryptjs.compare(Password,user.password);
        if(!passwordCompare){
            res.send({msg : "Wrong Credentials"});
        }
        else{
            res.redirect("/");
        }
    }
});

route.post("/Signup",async(req,res) =>{
    // console.log(req.body);
    let UserName = req.body.username;
    let UserEmail = req.body.email;
    let UserPassword = req.body.password;
    let hashpass = await bcryptjs.hash(UserPassword,10);
    console.log(hashpass);
    let NewId = new User({
        Username : UserName,
        Email : UserEmail,
        Password : hashpass,
        type : 0
    });
    NewId.save();
    res.redirect("/Login");
});

module.exports = route;
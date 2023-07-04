const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
var jwt = require('jsonwebtoken');
const route = express.Router();

route.post("/login",async(req,res) =>{
    console.log(req.body);
    let { email , password } = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error : "User does not exist"});
        }

        const check = await bcrypt.compare(password,user.password);

        if(!check){
            return res.status(400).json({error : "User does not exist"});
        }
        res.redirect("/");
    }
    catch(err){
        console.log(err);
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
        username : UserName,
        email : UserEmail,
        password : hashpass
    });
    NewId.save();
    res.redirect("/Login");
});

module.exports = route;
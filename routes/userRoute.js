const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
var jwt = require('jsonwebtoken');
// const fetch = require('node-fetch');
// const {axios } = require('axios');
const { body , validationResult } = require('express-validator');
const route = express.Router();


const axios = require('axios');


const errors = []

const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/api/Authenticate', {
      email,
      password
    });

    if (response.status === 200) {
      const token = response.data.authtoken;
      return token;
    } else {
        errors.push('Login failed');
    }
  } catch (error) {
    errors.push('Login failed');
  }
};


const getUser = async (token) => {
  try {
    const response = await axios.get('http://localhost:3000/api/GetUser', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      const user = response.data.user;
      return user;
    } else {
        errors.push('Failed to retrieve user');
    }
  } catch (error) {
    errors.push('Failed to retrieve user');
  }
};

  


route.post("/Login",[
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min : 5 }),
] ,async(req,res) =>{
    // console.log(req.body);
    let { email , password } = req.body;
    // let data1 = await getUser(data);
    // if(!errors.isEmpty()){
    //     console.log(errors);
    // }
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.render("login",{errors : err.array() });
    }
    let token = await login(email, password);
    if(!token){
        res.render("login",{error : "Please Authenticate using a valid user"});
    }
    try{
        const data = jwt.verify(token,process.env.JWT_STRING);
        const user = await User.findById(data.user.id);
        console.log(user);
        const check = bcryptjs.compare(password,user.password);
        if(!check){
            return res.render("login",{errors : "The Password is incorrect"});
        }

        res.redirect("/");


    }catch(err){
        console.log(err.message);
        res.status(500).send("Some Error occured");
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

// const handleSubmit = async(e)=>{
//     e.preventionDefault();
//     const response = await fetch("http://localhost:3000/api/Authenticate",{
//         method = 'POST',
//         headers : {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email, password})
//     });
//     const json = await response.json();
//     console.log(json);
// }



module.exports = route;
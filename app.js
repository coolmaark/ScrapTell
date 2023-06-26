require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const bcrypt = require("bcrypt")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const { allowedNodeEnvironmentFlags } = require("process");
const methodOverride = require("method-override");
const UserDataIDP = require("./models/UserData.js");
const app = express();
app.use( express.static('public'))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));
//for title case
function sentenceCase (str) {
  if ((str===null) || (str===''))
      return false;
  else
  str = str.toString();
  return str.replace(/\w\S*/g,
  function(txt){return txt.charAt(0).toUpperCase() +
      txt.substr(1).toLowerCase();});
}


app.get("/",function(req, res){
    res.render("index");
});
app.get("/Product",function(req,res){
    res.render("product.ejs");
});
app.get("/About",function(req, res){
    res.render("about.ejs");
})
app.get("/Sell",function(req, res){
    res.render("sell.ejs");
})
app.get("/Login",function(req, res){
    res.render("login.ejs");
});
app.get("/SignUp",function(req,res){
    res.render("signup.ejs");
});



app.post("/login",function(req,res){
    let UserEmail = req.body.Email;
    let UserPassword = req.body.Password;
    bcrypt.hash(UserPassword, process.env.SaltRounds , function(err, hash) {
        UserPassword = hash;
    });
    UserDataIDP.find(({Email: UserEmail}),function(err,val){
        if(err){
            console.log(err);
        }
        else{
            if(val.Password == UserPassword ) {
                res.redirect("/");
            }
            else{
                res.redirect("/Signup");
            }
        }
    });
});

app.post("/Signup",function(req,res){
    // console.log(req.body);
    let UserName = req.body.Username;
    let UserEmail = req.body.Email;
    let UserPassword = req.body.Password;
    bcrypt.hash(UserPassword, process.env.SaltRounds , function(err, hash) {
        UserPassword = hash;
    });
    // console.log(UserName);
    let NewId = new UserDataIDP({
        Username : req.body.Username,
        Email : UserEmail,
        Password : UserPassword
    });
    NewId.save();
    res.redirect("/Login");
});








app.listen(process.env.PORT, function() {
  console.log("Server started on http://localhost:"+process.env.PORT);
});
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
const Images = require("./lib/imagesl");
const app = express();
app.use( express.static('public'))
app.set('view engine', 'ejs');

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
// const wrapper=document.querySelector('.wrapper');
// const loginLink=document.querySelector('.login-link');
// const registerLink=document.querySelector('.register-link');
// registerLink.addEventListener('click' ,()=>{
//     wrapper.classList.add('active');
// });
// loginLink.addEventListener('click' ,()=>{
//     wrapper.classList.remove('active');
// });
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
app.get("/Cart",function(req,res){
    res.render("cart.ejs");
})
app.listen(process.env.PORT, function() {
  console.log("Server started on http://localhost:"+process.env.PORT);
});
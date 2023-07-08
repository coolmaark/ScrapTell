const express = require("express");
const router =  express.Router();

router.get("/",function(req, res){
    res.render("index");
});
router.get("/Product",function(req,res){
    res.render("product.ejs");
});
router.get("/About",function(req, res){
    res.render("about.ejs");
})
router.get("/Sell",function(req, res){
    res.render("sell.ejs");
})
router.get("/Login",function(req, res){
    res.render("login" , {errors : []});
});
router.get("/SignUp",function(req,res){
    res.render("signup" , {errors : []});
});

module.exports = router;
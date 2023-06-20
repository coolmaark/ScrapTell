// const Images = require("../models/imagesl");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const express = require("express");
const app = express();
app.use(express.json());
// const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/Categories",function(err){
    if(err){
        console.log("Database Not Connected");
    }
    else{
        console.log("Database Connected");
    }
});

const Schema= new mongoose.Schema({
    ProductId : {
        type : String,
        unique : true
    },

    ImageURL1 : {
        type : String,
        unique : true
    },
    ProductID1 : {
        type : String,
        unique : true
    },
    ProductDescription1 : {
        type : String,
        unique : false
    },
    ImageURL2 : {
        type : String,
        unique : true
    },
    ProductID2 : {
        type : String,
        unique : true
    },
    ProductDescription2 : {
        type : String,
        unique : false
    },
    ImageURL3 : {
        type : String,
        unique : true
    },
    ProductID3 : {
        type : String,
        unique : true
    },
    ProductDescription3 : {
        type : String,
        unique : false
    },
    ImageURL4 : {
        type : String,
        unique : true
    },
    ProductID4 : {
        type : String,
        unique : true
    },
    ProductDescription4 : {
        type : String,
        unique : false
    }
});

const type = mongoose.model("Images",Schema);

app.post("/post",function(req,res){
    let newtag = new type({
        ProductId : req.body.pid,

        ImageURL1 : req.body.url1,
        ProductID1 : req.body.pid1,
        ProductDescription1 : req.body.pd1,

        ImageURL2 : req.body.url2,
        ProductID2 : req.body.pid2,
        ProductDescription2 : req.body.pd2,
        
        ImageURL3 : req.body.url3,
        ProductID3 : req.body.pid3,
        ProductDescription3 : req.body.pd3,
        
        ImageURL4 : req.body.url4,
        ProductID4 : req.body.pid4,
        ProductDescription4 : req.body.pd4

    });

    const data = newtag.save();
    res.send("posted sucessfully");
});

app.get("/fetch/:id",function(req,res){
    let fetch = req.params.id;
    type.find(({ProductId: fetch}),function(err,val){
        if(err){
            console.log(err);
        }
        else{
            res.send(val);
        }
    });
});
    

app.listen(3000, function() {
    console.log("Server started on http://localhost:3000");
  });
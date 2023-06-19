const Images = require("../models/imagesl");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const express = require("express");
const app = express();
app.use(express.json());


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
    let fetch = req.params.pid;
    type.find(({ProductId: fetch}),function(err,val){
        if(err){
            console.log(err);
        }
        else{
            res.send(val);
        }
    })
})
    

app.listen(process.env.PORT, function() {
    console.log("Server started on http://localhost:3000");
  });
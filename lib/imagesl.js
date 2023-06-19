const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/images",function(err){
    if(err){
        console.log("Database Not Connected");
    }
    else{
        console.log("Database Connected");
    }
});

const Schema= new mongoose.Schema({
    ImageURL : {
        type : String,
        unique : true,
        required : true
    },
    ProductID : {
        type : String,
        unique : true
    },
    ProductDescription : {
        type : String,
        unique : false
    }
});

const Images = mongoose.model("Images",Schema);

module.exports = Images;

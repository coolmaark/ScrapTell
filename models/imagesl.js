const mongoose = require("mongoose");
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

module.exports = type;

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const Schema= new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true 
    },
    Password : {
        type : String,
        required : true
    },
    type : {
        type : Number
    }
});

module.exports = mongoose.model("User",Schema);

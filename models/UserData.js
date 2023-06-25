const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/UserData",function(err){
    if(err){
        console.log("Database Not Connected");
    }
    else{
        console.log("Database Connected");
    }
});

const Schema= new mongoose.Schema({
    Username : {
        type : String
    },
    Email : {
        type : String,
        require : true 
    },
    Password : {
        type : String
    }
});

const UserDataIDP = mongoose.model("UserDataIDP",Schema);



module.exports = UserDataIDP;

const mongoose = require("mongoose");

mongoURI = "mongodb://127.0.0.1:27017/images";

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

const Schema= new mongoose.Schema({
    username : {
        type : String,
        unique : false
    },
    email : {
        type : String,
        unique : false
    },
    rivew : {
        type : String,
        unique : false
    }
});

const Images = mongoose.model("Images",Schema);

module.exports = Images;

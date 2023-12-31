const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Is_Verified : {
    type: Number,
    required : true,
  },
});
const User = mongoose.model("User", Schema);
User.createIndexes();
module.exports = User;

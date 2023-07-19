const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text : {
    type: String
  }
});
const User = mongoose.model("User", Schema);
User.createIndexes();
module.exports = User;

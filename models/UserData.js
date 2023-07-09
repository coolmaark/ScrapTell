const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
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
Schema.plugin(passportLocalMongoose);
const User = mongoose.model("User", Schema);
User.createIndexes();
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
module.exports = User;

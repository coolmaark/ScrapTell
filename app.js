require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const bcryptjs = require("bcryptjs");
const { allowedNodeEnvironmentFlags } = require("process");
const methodOverride = require("method-override");
const UserDataIDP = require("./models/UserData.js");
const mongoose = require("mongoose");
const setverless = require("serverless-http");
mongoose.set("strictQuery", false);
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();

const HomeRoute = require("./routes/HomeRoute.js");
const UserRoute = require("./routes/userRoute.js");
const Auth = require("./routes/auth.js");
const About = require("./routes/About.js");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DBPORT, function (err) {
  if (err) {
    console.log("Database Not Connected");
  } else {
    console.log("Database Connected");
  }
});

app.use("/", HomeRoute);
app.use("/User", UserRoute);
app.use("/api", Auth);
app.use("/Queries",About);

app.listen(process.env.PORT, function () {
  console.log("Server started on " + process.env.BASE_URL);
});

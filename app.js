require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const bcryptjs = require("bcryptjs")
const { allowedNodeEnvironmentFlags } = require("process");
const methodOverride = require("method-override");
const UserDataIDP = require("./models/UserData.js");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const app = express();

const HomeRoute = require("./routes/HomeRoute.js");
const UserRoute = require("./routes/userRoute.js");
const Auth = require("./routes/auth.js");
app.use( express.static('public'))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DBPORT,function(err){
    if(err){
        console.log("Database Not Connected");
    }
    else{
        console.log("Database Connected");
    }
});

app.use("/",HomeRoute);
app.use("/User",UserRoute);
app.use("/api",Auth);

app.listen(process.env.PORT, function() {
  console.log("Server started on http://localhost:"+process.env.PORT);
});
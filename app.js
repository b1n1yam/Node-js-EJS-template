var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express(),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  flash = require("connect-flash"),
  methodOverride = require("method-override");

//mongoose setup
mongoose.connect("mongodb://127.0.0.1/madeInEthiiopiaDB");

//initializing routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//ROUTES INIT
var indexRoutes = require("./routes/index");

//ROUTES SETUP
//ROUTES
app.use(indexRoutes);
const port = 3000;

app.listen(port, () => console.log("Made in Ethiopia - server running!"));

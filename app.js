const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express(),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  flash = require("connect-flash"),
  methodOverride = require("method-override"),
  keys = require("./config/keys");

//mongoose setup
//mongoose.connect("mongodb://127.0.0.1/madeInEthiiopiaDB");

//initializing routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
//passport config
// require("./config/passport")(passport);

//ROUTES INIT
const indexRoutes = require("./routes/index");
// userRoutes = require("./routes/user"),
// shopRoutes = require("./routes/shop");

//ROUTES SETUP
//ROUTES
app.use(indexRoutes);
// app.use("/user", userRoutes);
// app.use(shopRoutes);

const port = 5000;

app.listen(port, () => console.log(`bfarm server running on port ${port}`));

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const keys = require("./config/keys");

//mongoose setup
try {
  mongoose
    .connect(
      "mongodb://exeligent-shard-00-01-knapx.mongodb.net:27017,exeligent-shard-00-02-knapx.mongodb.net:27017/test?ssl=true&replicaSet=Exeligent-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        auth: {
          user: "sam",
          password: "9604040347",
        },
      }
    )
    .then(() => console.log("atlas db connected"))
    .catch((err) => {
      console.log("err", err);
    });

  //console.log('MongoDB Connected...');
} catch (err) {
  console.error(err.message);
  //Exit process with failure
  process.exit(1);
}

//initializing routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//passport config
require("./config/passport")(passport);

//ROUTES INIT
const indexRoutes = require("./routes/index"),
  userRoutes = require("./routes/user"),
  shopRoutes = require("./routes/shop");

//ROUTES SETUP
//ROUTES
app.use(indexRoutes);
app.use("/user", userRoutes);
app.use(shopRoutes);

const port = 3000;

app.listen(port, () => console.log("Made in Ethiopia - server running!"));

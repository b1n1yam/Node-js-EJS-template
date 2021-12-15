// const express = require("express");
// const router = express.Router({ mergeParams: true });
// const passport = require("passport");
// const bcrypt = require("bcryptjs");
// const User = require("../model/user");
// const jwt = require("jsonwebtoken");
// const keys = require("../config/keys");

// router.post("/signup", (req, res) => {
//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       return res.status(400).json({ email: "Email already exists" });
//     } else {
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       });
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) console.log("err", err);
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log("err", err));
//         });
//       });
//     }
//   });
// });

// router.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const errors = {};
//   //FIND USER BY EMAIL
//   User.findOne({ email: email }, function(err, user) {
//     if (err) {
//       console.log(err);
//       return done(err);
//     }
//     if (!user) {
//       errors.email = "User not found";
//       return res.status(400).json(errors);
//     }
//     //CHECK PASSWORD
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         const payload = {
//           id: user.id,
//           name: user.name,
//           email: user.email
//         };
//         //SIGN TOOKEN
//         jwt.sign(
//           payload,
//           keys.secret,
//           { expiresIn: 180 * 60 * 1000 },
//           (err, token) => {
//             if (err) console.log(err);

//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res.status(400).json({ passport: "Password incorrect" });
//       }
//     });
//   });
// });
// //setting the currernt userre
// router.get(
//   "/current",
//   passport.authenticate("jwt", { sessison: false }),
//   (req, res) => {
//     res.json({
//       id: req.user.id,
//       name: req.user.name,
//       email: req.user.email
//     });
//   }
// );
// module.exports = router;

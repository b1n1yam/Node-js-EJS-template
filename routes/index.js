const express = require("express");
const router = express.Router({ mergeParams: true });
const Contact = require("../model/contact");

//@route GET /
//@desc static homepage
//access public
router.get("/", (req, res) => {
  res.render("index");
});
//@route GET /about-ceo
//@desc static page about the ceo
//access public
router.get("/about-ceo", (req, res) => {
  res.render("about-ceo");
});
//@route GET /contact
//@desc static contact
//access public
router.get("/contact", (req, res) => {
  res.render("contact");
});
//@route GET /login
//@desc static login
//access public
// router.get("/login", (req, res) => {
//   res.render("login");
// });
//@route GET /signup
//@desc static signup
//access public
// router.get("/signup", (req, res) => {
//   res.render("signup");
// });
//@route GET /team
//@desc static team
//access public
router.get("/about", (req, res) => {
  res.render("team");
});
//@route GET /about/team
//@desc static team
//access public
// router.get("/our-team", (req, res) => {
//   res.render("about-team");
// });
//@route GET /process
//@desc static process
//access public
router.get("/process", (req, res) => {
  res.render("process");
});

//@route POST /contact
//@desc contact us page
//access public
// router.post("/contact", (req, res) => {
//   const contactFields = {};

//   if (req.body.name) contactFields.name = req.body.name;
//   if (req.body.email) contactFields.email = req.body.email;
//   if (req.body.phone) contactFields.phone = req.body.phone;
//   if (req.body.message) contactFields.message = req.body.message;

//SAVE MESSAGE
//   new Contact(contactFields)
//     .save()
//     .then(contact => res.json(contact))
//     .catch(err => console.log("contact err", err));
// });

// router.get("/contact", (req, res) => {
//   Contact.find({})
//     .then(msgs => {
//       res.redirect("messages", { msgs });
//     })
//     .catch(err => {
//       console.log("msg err", err);
//       res.redirect("/");
//     });
// });
module.exports = router;

var express = require("express");
var router = express.Router({ mergeParams: true });

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
router.get("/login", (req, res) => {
  res.render("login");
});
//@route GET /signup
//@desc static signup
//access public
router.get("/signup", (req, res) => {
  res.render("signup");
});
//@route GET /team
//@desc static team
//access public
router.get("/our-team", (req, res) => {
  res.render("team");
});
//@route GET /about/team
//@desc static team
//access public
router.get("/our-team", (req, res) => {
  res.render("/about-team");
});
//@route GET /process
//@desc static process
//access public
router.get("/process", (req, res) => {
  res.render("/process");
});
module.exports = router;

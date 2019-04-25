const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");

router.get("/shop", (req, res) => {
  res.render("shop-grid");
});
router.get("/shop-single", (req, res) => {
  res.render("shop-single");
});
module.exports = router;

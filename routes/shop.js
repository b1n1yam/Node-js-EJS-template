// const express = require("express");
// const router = express.Router({ mergeParams: true });
// const passport = require("passport");

// const Product = require("../model/product");

// //@route GET /shop
// //@desc shop homepage
// //access public
// router.get("/product", (req, res) => {
//   Product.find({})
//     .then(products => {
//       res.render("shop-grid", { products });
//     })
//     .catch(err => {
//       console.log("product-list err", err);
//       res.redirect("/");
//     });
// });

// //@route POST /
// //@desc add a new product
// //access public
// router.post("/product", (req, res) => {
//   const productFields = {};

//   if (req.body.name) productFields.name = req.body.name;
//   if (req.body.size) productFields.size = req.body.size;
//   if (req.body.texture) productFields.texture = req.body.texture;
//   if (req.body.quality) productFields.quality = req.body.quality;
//   if (req.body.notes) productFields.notes = req.body.notes;

//   //colors
//   if (typeof req.body.color != "undefined") {
//     productFields.color = req.body.color.split(",");
//   }

//   //SAVE PRODUCT
//   new Product(productFields)
//     .save()
//     .then(product => res.json(product))
//     .catch(err => console.log("err", err));
// });

// //@route PUT /
// //@desc update a product
// //access public
// router.put("/product/:id/edit", (req, res) => {
//   //GET FIELDS
//   const productFields = {};

//   if (req.body.name) productFields.name = req.body.name;
//   if (req.body.size) productFields.size = req.body.size;
//   if (req.body.texture) productFields.texture = req.body.texture;
//   if (req.body.quality) productFields.quality = req.body.quality;
//   if (req.body.notes) productFields.notes = req.body.notes;

//   //colors
//   if (typeof req.body.color != "undefined") {
//     productFields.color = req.body.color.split(",");
//   }

//   Product.findByIdAndUpdate(
//     req.params.id,
//     { $set: productFields },
//     { new: true }
//   )
//     .then(product => res.json(product))
//     .catch(err => {
//       console.log("upadte err", err);
//     });
// });
// //@route DELETE /
// //@desc delete a product
// //access public
// router.delete("/product/:id/delete", (req, res) => {
//   Product.findOneAndDelete(req.params.id)
//     .then(res.redirect("/product"))
//     .catch(err => console.log("delete err", err));
// });

// //@route GET /shop/:id
// //@desc single product
// //access public
// router.get("/product/:id", (req, res) => {
//   const id = req.params.id;
//   Product.findById(id)
//     .then(product => {
//       res.render("shop-single", { product });
//     })
//     .catch(err => {
//       console.log("single product err", err);
//     });
// });
// module.exports = router;

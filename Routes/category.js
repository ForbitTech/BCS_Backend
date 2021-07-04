const express = require("express");
const mongoose = require("mongoose");
const Category = require("../Models/category");
const Subcategory = require("../Models/subcategory");

const router = express.Router();

router.get("/", (req, res) => {
  Category.find()
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(500).json(er));
});

router.post("/", (req, res) => {
  const catObj = {
    name: req.body.name,
    image: req.body.image,
  };

  const category = new Category(catObj);
  category
    .save()
    .then((categories) => res.status(200).json(categories))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id/subcats", (req, res) => {
  Subcategory.find({ category: req.params.id })
    .then((subcat) => res.status(200).json(subcat))
    .catch((Err) => res.status(500).json(Err));
});

module.exports = router;

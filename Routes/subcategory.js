const express = require("express");
const mongoose = require("mongoose");
const Questions = require("../Models/question");
const Subcategory = require("../Models/subcategory");

const router = express.Router();

router.get("/", (req, res) => {
  Subcategory.find()
    .populate("category")
    .then((subcat) => res.status(200).json(subcat))
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const subcatObj = {
    name: req.body.name,
    category: req.body.category,
  };

  const subcategory = new Subcategory(subcatObj);
  subcategory
    .save()
    .then((subcategory) => res.status(200).json(subcategory))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/questions", (req, res) => {
  Questions.find({ subcategory: req.params.id })
    .select("options answer question")
    .then((questions) => res.status(200).json(questions))
    .catch((err) => res.status(500).json(err));
});

// router.get("/:id/sub", (req, res) => {
//   Subcategory.deleteOne({ _id: req.params.id }).then((a) =>
//     res.status(200).json(a)
//   );
// });

module.exports = router;

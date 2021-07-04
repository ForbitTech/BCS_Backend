const express = require("express");
const mongoose = require("mongoose");
const Questions = require("../Models/question");
const router = express.Router();

router.get("/", (req, res) => {
  Questions.find().then((quiz) => res.status(200).json(quiz))
  .catch((Err)=>res.status(500).json(Err))
});

router.post("/", (req, res) => {
  const questionObj = {
    question: req.body.question,
    answer: req.body.answer,
    options: req.body.options,
    subcategory:req.body.subcategory
  };
  const questions = new Questions(questionObj);
  question
    .save()
    .then((question) => res.status(200).json(question))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

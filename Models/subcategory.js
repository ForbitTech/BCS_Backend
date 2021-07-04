const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubcategorySchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

const Subcategory = mongoose.model("Subcategory", SubcategorySchema);
module.exports = Subcategory;

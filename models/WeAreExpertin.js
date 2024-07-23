const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  Title: {
    type: String,
    require: ["please write logo title"],
    default: " ",
  },
  image: {
    type: String,
    require: ["please provide logo image"],
  },
});

const Weareexpert = mongoose.model("Weareexpert", Schema);

module.exports = Weareexpert;

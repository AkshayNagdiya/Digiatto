const mongoose = require("mongoose");

const ButtonSchema = new mongoose.Schema({
  text: { type: String, required: true },
  link: { type: String, required: true },
});

const HerosectionSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    button: [ButtonSchema],
  },
  { timestamps: true }
);

const HeroSection = mongoose.model("HeroSection", HerosectionSchema);

module.exports = HeroSection;

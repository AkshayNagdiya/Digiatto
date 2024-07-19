const mongoose = require("mongoose");

const HerosectionSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const HeroSection = mongoose.model("HeroSection", HerosectionSchema);

module.exports = HeroSection;

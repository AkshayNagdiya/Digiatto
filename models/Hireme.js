const mongoose = require("mongoose");

const HiremeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide a title"],
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    subtitle: {
      type: String,
      trim: true,
      maxlength: [200, "Subtitle cannot be more than 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    image: {
      type: String,
      required: [true, "Please provide an image URL"],
    },
    skills: {
      type: [String],
      required: true,
    },
    database: {
      type: [String],
      required: [true, "Please provide database information"],
    },
    logicalSkills: {
      type: [String],
      required: [true, "Please provide logical skills information"],
    },
  },
  {
    timestamps: true,
  }
);

const Hireme = mongoose.model("Hireme", HiremeSchema);

module.exports = Hireme;

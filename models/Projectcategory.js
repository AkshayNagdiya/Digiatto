const mongoose = require("mongoose");

const ProjectcategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the project category"],
  },
  subtitle: {
    type: String,
    required: [true, "Please provide a subtitle for the project category"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for the project category"],
  },
  image: {
    type: String,
    required: [true, "Please provide an image URL for the project category"],
  },
});

const Projectcategory = mongoose.model(
  "Projectcategory",
  ProjectcategorySchema
);

module.exports = Projectcategory;

const mongoose = require("mongoose");

const ProjectManagmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the description"],
    },
    subtitle: {
      type: String,
      required: [true, "Please provide a subtitle for the description"],
      default: "",
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Please provide a title for the category"],
    },
  },
  {
    timestamps: true,
  }
);

const ProjectManagment = mongoose.model(
  "ProjectManagment",
  ProjectManagmentSchema
);

module.exports = ProjectManagment;

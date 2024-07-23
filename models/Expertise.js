const mongoose = require("mongoose");

const ExpertiseSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: [true, "Please enter a title of expertise"],
    },
    subtopic: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "Please enter a description of expertise"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Expertise = mongoose.model("Expertise", ExpertiseSchema);

module.exports = Expertise;

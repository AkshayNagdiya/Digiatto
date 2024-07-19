const mongoose = require("mongoose");

const WhatwedoSchema = new mongoose.Schema(
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
      required: [true, "Please provide  descriptions"],
    },
    image: {
      type: String,
      required: [true, "Please provide a logo URL"],
    },
  },
  {
    timestamps: true,
  }
);

const Whatwedo = mongoose.model("Whatwedo", WhatwedoSchema);

module.exports = Whatwedo;

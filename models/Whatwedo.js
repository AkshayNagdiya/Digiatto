const mongoose = require("mongoose");

// Nested schema for items in arrays
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

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
      required: [true, "Please provide descriptions"],
    },
    image: {
      type: String,
      required: [true, "Please provide a logo URL"],
    },
    languages: {
      type: [ItemSchema],
      required: [true, "Please provide languages"],
    },
    database: {
      type: [ItemSchema],
      required: [true, "Please provide database"],
    },
    frameworks: {
      type: [ItemSchema],
      required: [true, "Please provide frameworks"],
    },
    sdk: {
      type: [ItemSchema],
      required: [true, "Please provide sdk"],
    },
    tools: {
      type: [ItemSchema],
      required: [true, "Please provide tools"],
    },
    category: {
      type: String,
      require: [true, "Please provide category"],
    },
  },
  {
    timestamps: true,
  }
);

const Whatwedo = mongoose.model("Whatwedo", WhatwedoSchema);

module.exports = Whatwedo;

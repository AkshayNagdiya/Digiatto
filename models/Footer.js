const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  text: { type: String, required: true },
  link: { type: String, required: true },
});

const Schema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  services: {
    type: [TextSchema],
    required: true,
  },
  industry_solutions: {
    type: [TextSchema],
    required: true,
  },
});

module.exports = mongoose.model("SchemaName", Schema);

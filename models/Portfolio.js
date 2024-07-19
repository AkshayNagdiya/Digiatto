const mongoose = require("mongoose");

const PortfolioSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: ["Enter a title of portfolio"],
      max: 20,
    },
    subtitle: {
      type: String,
      require: ["Enter a subtitle of portfolio"],
      max: 50,
    },
    description: {
      type: String,
      require: ["Enter a description of portfolio"],
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;

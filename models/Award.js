const mongoose = require("mongoose");

const AwardSchema = new mongoose.Schema(
  {
    Awardimage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Award = mongoose.model("Award", AwardSchema);
module.exports = Award;

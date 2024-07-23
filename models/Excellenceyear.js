const mongoose = require("mongoose");

const YearSchema = new mongoose.Schema(
  {
    Year: {
      type: Number,
      required: true,
    },
    Details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ExcellenceYear = mongoose.model("ExcellenceYear", YearSchema);
module.exports = ExcellenceYear;

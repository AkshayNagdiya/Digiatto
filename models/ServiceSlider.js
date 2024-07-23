const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Productname: {
      type: String,
      required: true,
    },
    Productimage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Serviceslider = mongoose.model("Serviceslider", productSchema);
module.exports = Serviceslider;

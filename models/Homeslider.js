const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Productname: {
    type: String,
    required: true,
  },
  Productimage: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Homeslider = mongoose.model('Homeslider', productSchema);
module.exports = Homeslider;

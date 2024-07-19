const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  servicename: {
    type: String,
    require: ["please write servicename"],
  },
  description: {
    type: String,
    require: ["please write description"],
  },
  link: {
    type: String,
    require: ["please provide link"],
  },
  image: {
    type: String,
    require: ["please provide icon"],
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;

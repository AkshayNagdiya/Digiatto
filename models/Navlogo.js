const mongoose = require("mongoose");

const NavlogoSchema = mongoose.Schema({
  Title: {
    type: String,
    require: ["please write logo title"],
    default: " ",
  },
  image: {
    type: String,
    require: ["please provide logo image"],
  },
});

const Navlogo = mongoose.model("Navlogo", NavlogoSchema);

module.exports = Navlogo;

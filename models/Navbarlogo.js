const mongoose = require("mongoose");

const NavbarlogoSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Navbarlogo = mongoose.model("Navbarlogo", NavbarlogoSchema);
module.exports = Navbarlogo;

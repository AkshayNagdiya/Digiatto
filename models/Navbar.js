const mongoose = require("mongoose");

const ButtonSchema = new mongoose.Schema({
  text: { type: String, required: true },
  link: { type: String, required: true },
});

const NavbarSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
    menuitems: [
      {
        title: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
      },
    ],
    button: ButtonSchema,
  },
  { timestamps: true }
);

const Navbar = mongoose.model("Navbar", NavbarSchema);
module.exports = Navbar;

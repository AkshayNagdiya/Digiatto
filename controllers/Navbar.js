const Navbar = require("../models/Navbar");

const getAllNavbars = async (req, res) => {
  try {
    const navbars = await Navbar.find();
    res.status(200).json(navbars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getNavbarById = async (req, res) => {
  const { id } = req.params;
  try {
    const navbar = await Navbar.findById(id);
    if (!navbar) {
      return res.status(404).json({ message: "Navbar not found" });
    }
    res.status(200).json(navbar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNavbar = async (req, res) => {
  const { logo, menuitems, button } = req.body;
  const newNavbar = new Navbar({ logo, menuitems, button });

  try {
    const savedNavbar = await newNavbar.save();
    res
      .status(201)
      .json({ message: "Navbar Created Successfully", savedNavbar });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateNavbar = async (req, res) => {
  const { id } = req.params;
  const { logo, menuitems, button } = req.body;

  try {
    const navbar = await Navbar.findById(id);
    if (!navbar) {
      return res.status(404).json({ message: "Navbar not found" });
    }

    if (logo) {
      navbar.logo = logo;
    }
    if (menuitems) {
      navbar.menuitems = menuitems;
    }
    if (button) {
      navbar.button = button;
    }

    const updatedNavbar = await navbar.save();
    res.status(200).json(updatedNavbar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteNavbar = async (req, res) => {
  const { id } = req.params;

  try {
    const navbar = await Navbar.findById(id);
    if (!navbar) {
      return res.status(404).json({ message: "Navbar not found" });
    }

    await navbar.remove();
    res.status(200).json({ message: "Navbar deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllNavbars,
  getNavbarById,
  createNavbar,
  updateNavbar,
  deleteNavbar,
};

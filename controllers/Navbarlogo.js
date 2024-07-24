const Navbarlogo = require("../models/Navbarlogo");

const createNavbarlogo = async (req, res) => {
  const image = req.file ? req.file.path : null;

  try {
    const navbarlogo = await Navbarlogo.create({
      image,
    });

    return res.status(201).json(navbarlogo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getnavbarlogo = async (req, res) => {
  try {
    const navbarlogo = await Navbarlogo.find({});
    res.json(navbarlogo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletenavbarlogo = async (req, res) => {
  const logoId = req.params.id;

  try {
    const deletenavbarlogo = await Navbarlogo.findByIdAndDelete(logoId);

    if (!deletenavbarlogo) {
      return res
        .status(404)
        .json({ message: "Navbarlogo not found for delete" });
    }

    res
      .status(200)
      .json({ message: "Navbarlogo deleted successfully", deletenavbarlogo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNavbarlogo,
  getnavbarlogo,
  deletenavbarlogo,
};

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

const Updatenavbarlogo = async (req, res) => {
  const logoId = req.params.id;

  try {
    const UpdateNavbarlogo = await Navbarlogo.findByIdAndUpdate(logoId);

    if (!UpdateNavbarlogo) {
      return res.status(404).json({ message: "Navbarlogo not found" });
    }

    res
      .status(200)
      .json({ message: "Navbarlogo Update successfully", UpdateNavbarlogo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNavbarlogo,
  getnavbarlogo,
  Updatenavbarlogo,
};

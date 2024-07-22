const Hireme = require("../models/Hireme");

const createHireme = async (req, res) => {
  const { title, subtitle, description, skills, database, logicalSkills } =
    req.body;
  const image = req.file ? req.file.path : null;

  try {
    const hireme = await Hireme.create({
      title,
      subtitle,
      description,
      image,
      skills,
      database,
      logicalSkills,
    });

    return res.status(201).json(hireme);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Controller to get all Project Categories
const getAllHireme = async (req, res) => {
  try {
    const hireme = await Hireme.find({});
    res.json(hireme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single Project Category by ID
const getHiremeById = async (req, res) => {
  const hiremeId = req.params.id;

  try {
    const hireme = await Hireme.findById(hiremeId);
    if (!hireme) {
      return res.status(404).json({ message: " not found" });
    }
    res.json(hireme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a Project Category by ID
const deleteHireme = async (req, res) => {
  const hiremeId = req.params.id;

  try {
    const deletedhireme = await Hireme.findByIdAndDelete(hiremeId);
    if (!deletedhireme) {
      return res.status(404).json({ message: "hireme category not found" });
    }
    res.json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Controller to update a Project Category by ID
const updateHireme = async (req, res) => {
  const hiremeId = req.params.id;
  const { title, subtitle, description, skills, database, logicalSkills } =
    req.body;
  const image = req.file ? req.file.path : null;

  try {
    const hireme = await Hireme.findByIdAndUpdate(
      hiremeId,
      {
        title,
        subtitle,
        description,
        image,
        skills,
        database,
        logicalSkills,
      },
      { new: true }
    );

    if (!hireme) {
      return res.status(404).json({ message: "Hireme category not found" });
    }

    res.json(hireme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHireme,
  getAllHireme,
  getHiremeById,
  deleteHireme,
  updateHireme,
};

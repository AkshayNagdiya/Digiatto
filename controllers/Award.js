const Award = require("../models/Award");

// Controller to create a new award entry
const createAward = async (req, res) => {
  const Awardimage = req.file ? req.file.path : null;

  try {
    // Create a new Award entry in the database
    const award = await Award.create({
      Awardimage,
    });

    return res.status(201).json(award);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Controller to get all award entries
const getAllAwards = async (req, res) => {
  try {
    const awards = await Award.find({});
    res.json(awards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAwardById = async (req, res) => {
  const awardId = req.params.id;

  try {
    const deletedAward = await Award.findByIdAndDelete(awardId);

    if (!deletedAward) {
      return res.status(404).json({ message: "Award not found" });
    }

    res
      .status(200)
      .json({ message: "Award deleted successfully", deletedAward });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAward,
  getAllAwards,
  deleteAwardById,
};

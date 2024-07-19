const Award = require("../models/Award");

// Controller to create a new award entry
const createAward = async (req, res) => {
  const { awardImage } = req.body;

  try {
    // Create a new Award entry in the database
    const award = await Award.create({
      awardImage,
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

// Controller to get a single award entry by ID
const getAwardById = async (req, res) => {
  const awardId = req.params.id;

  try {
    const awards = await Award.findById(awardId);
    res.json(awards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAwardById = async (req, res) => {
  const awardId = req.params.id;

  try {
    const awards = await Award.findByIdAndDelete(awardId);
    res.json(awards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAwards,
  getAwardById,
  deleteAwardById,
};

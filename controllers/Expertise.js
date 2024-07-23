const Expertise = require("../models/Expertise");

const createExpertise = async (req, res) => {
  try {
    const { topic, subtopic, description } = req.body;
    const image = req.file ? req.file.path : null;

    const expertise = new Expertise({
      topic,
      subtopic,
      description,
      image,
    });

    const savedExpertise = await expertise.save();

    res.status(201).json(savedExpertise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllExpertise = async (req, res) => {
  try {
    const expertise = await Expertise.find();
    res.json(expertise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getExpertiseById = async (req, res) => {
  try {
    const { id } = req.params;
    const expertise = await Expertise.findById(id);

    if (!expertise) {
      return res.status(404).json({ error: "Expertise not found" });
    }

    res.json(expertise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateExpertise = async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, subtopic, description } = req.body;
    const image = req.file ? req.file.path : null;

    const updatedExpertise = await Expertise.findByIdAndUpdate(
      id,
      { topic, subtopic, description, image },
      { new: true }
    );

    if (!updatedExpertise) {
      return res.status(404).json({ error: "Expertise not found" });
    }

    res.json(updatedExpertise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteExpertise = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpertise = await Expertise.findByIdAndDelete(id);

    if (!deletedExpertise) {
      return res.status(404).json({ error: "Expertise not found" });
    }

    res.json({ message: "Expertise deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createExpertise,
  getAllExpertise,
  getExpertiseById,
  updateExpertise,
  deleteExpertise,
};

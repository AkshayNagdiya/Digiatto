const Weareexpert = require("../models/WeAreExpertin");

const CreateWeareexpert = async (req, res) => {
  try {
    const { Title } = req.body;
    const image = req.file ? req.file.path : null;

    const weareexpert = new Weareexpert({
      Title,
      image,
    });

    const savedweareexpert = await weareexpert.save();

    res.status(201).json(savedweareexpert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const GetWeareexpert = async (req, res) => {
  try {
    const weareexpert = await Weareexpert.find();
    res.status(200).json(weareexpert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UpdateWeareexpert = async (req, res) => {
  try {
    const { id } = req.params;
    const { Title } = req.body;
    const image = req.file ? req.file.path : null;

    const updatedweareexpert = await Weareexpert.findByIdAndUpdate(
      id,
      {
        Title,
        image,
      },
      { new: true }
    );
    if (!updatedweareexpert) {
      return res.status(404).json({ message: "weareexpert not found" });
    }
    res.status(200).json(updatedweareexpert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a WeAreExpertin entry by ID
const DeleteWeareexpert = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedweareexpert = await Weareexpert.findByIdAndDelete(id);

    if (!deletedweareexpert) {
      return res.status(404).json({ message: "WeAreExpertin not found" });
    }

    res.status(200).json({ message: "WeAreExpertin deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a WeAreExpertin entry by ID
const GetWeareexpertById = async (req, res) => {
  try {
    const { id } = req.params;

    const weareexpert = await Weareexpert.findById(id);

    if (!weareexpert) {
      return res.status(404).json({ message: "WeAreExpertin not found" });
    }

    res.status(200).json(weareexpert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  GetWeareexpert,
  CreateWeareexpert,
  UpdateWeareexpert,
  DeleteWeareexpert,
  GetWeareexpertById
};

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

module.exports = { GetWeareexpert, CreateWeareexpert, UpdateWeareexpert };

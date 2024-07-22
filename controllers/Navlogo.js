const Navlogo = require("../models/Navlogo");

const CreateNavlogo = async (req, res) => {
  try {
    const { Title } = req.body;
    const image = req.file ? req.file.path : null;

    const navlogo = new Navlogo({
      Title,
      image,
    });

    const savednavlogo = await navlogo.save();

    res.status(201).json(savednavlogo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const GetNavlogo = async (req, res) => {
  try {
    const navlogo = await Navlogo.find();
    res.status(200).json(navlogo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UpdateNavlogo = async (req, res) => {
  try {
    const { id } = req.params;
    const { Title } = req.body;
    const image = req.file ? req.file.path : null;

    const updatednavlogo = await Navlogo.findByIdAndUpdate(
      id,
      {
        Title,
        image,
      },
      { new: true }
    );
    if (!updatednavlogo) {
      return res.status(404).json({ message: "navlogo not found" });
    }
    res.status(200).json(updatednavlogo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { GetNavlogo, CreateNavlogo, UpdateNavlogo };

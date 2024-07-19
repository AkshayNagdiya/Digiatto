const Whatwedo = require("../models/Whatwedo");

const registerWhatwedo = async (req, res) => {
  const { title, subtitle, description } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    // Create a new ProjectManagment entry in the database
    const whatwedo = await Whatwedo.create({
      title,
      subtitle,
      description,
      image,
    });

    return res.status(201).json(whatwedo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllWhatwedo = async (req, res) => {
  try {
    const whatwedo = await Whatwedo.find({});
    res.json(whatwedo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWhatwedotById = async (req, res) => {
  const whatwedoId = req.params.id;

  try {
    const whatwedo = await Whatwedo.findById(whatwedoId);
    if (!whatwedo) {
      return res
        .status(404)
        .json({ message: "Project management entry not found" });
    }
    res.json(whatwedo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateWhatwedo = async (req, res) => {
  const { title, subtitle, description, image } = req.body;
  const whatwedoId = req.params.id;

  // Check if all required fields are provided
  if (!title || !subtitle || !description) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }

  try {
    // Update the ProjectManagment entry
    const updatedwhatwedo = await Whatwedo.findByIdAndUpdate(
      whatwedoId,
      {
        title,
        subtitle,
        description,
        image,
      },
      { new: true } // Return the updated document
    );

    if (!updatedwhatwedo) {
      return res
        .status(404)
        .json({ message: "Project management entry not found" });
    }

    res.json(updatedwhatwedo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteWhatwedot = async (req, res) => {
  const whatwedoId = req.params.id;

  try {
    const deletedwhatwedo = await Whatwedo.findByIdAndDelete(whatwedoId);
    if (!deletedwhatwedo) {
      return res
        .status(404)
        .json({ message: "Project management entry not found" });
    }
    res.json({ message: "Project management entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerWhatwedo,
  getAllWhatwedo,
  getWhatwedotById,
  updateWhatwedo,
  deleteWhatwedot,
};

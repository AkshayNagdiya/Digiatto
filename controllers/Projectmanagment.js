const ProjectManagment = require("../models/Projectmanagment");

const registerProjectManagment = async (req, res) => {
  const { title, subtitle, description } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    // Create a new ProjectManagment entry in the database
    const projectManagment = await ProjectManagment.create({
      title,
      subtitle,
      description,
      image,
    });

    return res.status(201).json(projectManagment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllProjectManagment = async (req, res) => {
  try {
    const projectManagments = await ProjectManagment.find({});
    res.json(projectManagments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectManagmentById = async (req, res) => {
  const projectManagmentId = req.params.id;

  try {
    const projectManagment = await ProjectManagment.findById(
      projectManagmentId
    );
    if (!projectManagment) {
      return res
        .status(404)
        .json({ message: "Project management entry not found" });
    }
    res.json(projectManagment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProjectManagment = async (req, res) => {
  const { title, subtitle, description, image } = req.body;
  const projectManagmentId = req.params.id;

  // Check if all required fields are provided
  if (!title || !subtitle || !description) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }

  try {
    // Update the ProjectManagment entry
    const updatedProjectManagment = await ProjectManagment.findByIdAndUpdate(
      projectManagmentId,
      {
        title,
        subtitle,
        description,
        image,
      },
      { new: true } // Return the updated document
    );

    if (!updatedProjectManagment) {
      return res
        .status(404)
        .json({ message: "Project management entry not found" });
    }

    res.json(updatedProjectManagment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProjectManagment = async (req, res) => {
  const projectManagmentId = req.params.id;

  try {
    const deletedProjectManagment = await ProjectManagment.findByIdAndDelete(
      projectManagmentId
    );
    if (!deletedProjectManagment) {
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
  registerProjectManagment,
  getAllProjectManagment,
  getProjectManagmentById,
  updateProjectManagment,
  deleteProjectManagment,
};

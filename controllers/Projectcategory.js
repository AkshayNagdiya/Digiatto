const Projectcategory = require("../models/Projectcategory");

// Controller to create a new Project Category
const createProjectcategory = async (req, res) => {
  const { title, subtitle, description } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const projectCategory = await Projectcategory.create({
      title,
      subtitle,
      description,
      image,
    });

    return res.status(201).json(projectCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Controller to get all Project Categories
const getAllProjectcategories = async (req, res) => {
  try {
    const projectCategories = await Projectcategory.find({});
    res.json(projectCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single Project Category by ID
const getProjectcategoryById = async (req, res) => {
  const projectCategoryId = req.params.id;

  try {
    const projectCategory = await Projectcategory.findById(projectCategoryId);
    if (!projectCategory) {
      return res.status(404).json({ message: "Project category not found" });
    }
    res.json(projectCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a Project Category by ID
const updateProjectcategory = async (req, res) => {
  const { title, subtitle, description, image } = req.body;
  const projectCategoryId = req.params.id;

  try {
    const updatedProjectCategory = await Projectcategory.findByIdAndUpdate(
      projectCategoryId,
      {
        title,
        subtitle,
        description,
        image,
      },
      { new: true }
    );

    if (!updatedProjectCategory) {
      return res.status(404).json({ message: "Project category not found" });
    }

    res.json(updatedProjectCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a Project Category by ID
const deleteProjectcategory = async (req, res) => {
  const projectCategoryId = req.params.id;

  try {
    const deletedProjectCategory = await Projectcategory.findByIdAndDelete(
      projectCategoryId
    );
    if (!deletedProjectCategory) {
      return res.status(404).json({ message: "Project category not found" });
    }
    res.json({ message: "Project category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProjectcategory,
  getAllProjectcategories,
  getProjectcategoryById,
  updateProjectcategory,
  deleteProjectcategory,
};

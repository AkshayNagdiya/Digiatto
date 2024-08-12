const SchemaName = require("../models/Footer");

// Create a new SchemaName entry
const createSchemaEntry = async (req, res) => {
  const { description, services, industry_solutions } = req.body;
  const logo = req.file ? req.file.path : null;

  try {
    const newEntry = await SchemaName.create({
      logo,
      description,
      services,
      industry_solutions,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all SchemaName entries
const getAllSchemaEntries = async (req, res) => {
  try {
    const entries = await SchemaName.find({});
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific SchemaName entry by ID
const getSchemaEntryById = async (req, res) => {
  const { id } = req.params;

  try {
    const entry = await SchemaName.findById(id);

    if (!entry) {
      return res.status(404).json({ message: "SchemaName entry not found" });
    }

    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a specific SchemaName entry by ID
const updateSchemaEntry = async (req, res) => {
  const { id } = req.params;
  const { description, services, industry_solutions } = req.body;
  const logo = req.file ? req.file.path : null;

  try {
    const updatedEntry = await SchemaName.findByIdAndUpdate(
      id,
      {
        logo,
        description,
        services,
        industry_solutions,
      },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "SchemaName entry not found" });
    }

    res.json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a specific SchemaName entry by ID
const deleteSchemaEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEntry = await SchemaName.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "SchemaName entry not found" });
    }

    res.json({ message: "SchemaName entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchemaEntry,
  getAllSchemaEntries,
  getSchemaEntryById,
  updateSchemaEntry,
  deleteSchemaEntry,
};

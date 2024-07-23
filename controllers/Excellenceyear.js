const ExcellenceYear = require("../models/Excellenceyear");

// Create a new ExcellenceYear entry
const createExcellenceYear = async (req, res) => {
  const { Year, Details } = req.body;

  try {
    const newEntry = await ExcellenceYear.create({
      Year,
      Details,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all ExcellenceYear entries
const getAllExcellenceYears = async (req, res) => {
  try {
    const entries = await ExcellenceYear.find({});
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific ExcellenceYear entry by ID
const getExcellenceYearById = async (req, res) => {
  const { id } = req.params;

  try {
    const entry = await ExcellenceYear.findById(id);

    if (!entry) {
      return res
        .status(404)
        .json({ message: "ExcellenceYear entry not found" });
    }

    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a specific ExcellenceYear entry by ID
const updateExcellenceYear = async (req, res) => {
  const { id } = req.params;
  const { Year, Details } = req.body;

  try {
    const updatedEntry = await ExcellenceYear.findByIdAndUpdate(
      id,
      {
        Year,
        Details,
      },
      { new: true }
    );

    if (!updatedEntry) {
      return res
        .status(404)
        .json({ message: "ExcellenceYear entry not found" });
    }

    res.json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a specific ExcellenceYear entry by ID
const deleteExcellenceYear = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEntry = await ExcellenceYear.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res
        .status(404)
        .json({ message: "ExcellenceYear entry not found" });
    }

    res.json({ message: "ExcellenceYear entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createExcellenceYear,
  getAllExcellenceYears,
  getExcellenceYearById,
  updateExcellenceYear,
  deleteExcellenceYear,
};

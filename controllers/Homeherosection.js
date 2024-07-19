const HeroSection = require("../models/Homeherosection");

// Create a new hero section
const createHeroSection = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    const newHeroSection = new HeroSection({ title, subtitle, description });
    await newHeroSection.save();

    return res.status(201).json({
      message: "Hero section created successfully.",
      heroSection: newHeroSection,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get all hero sections
const getHeroSections = async (req, res) => {
  try {
    const heroSections = await HeroSection.find();
    return res.status(200).json(heroSections);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Update a hero section by ID
const updateHeroSection = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSection = await HeroSection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSection) {
      return res.status(404).json({ message: "Hero section not found." });
    }
    return res.status(200).json({
      message: "Hero section updated successfully.",
      heroSection: updatedSection,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete a hero section by ID
const deleteHeroSection = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSection = await HeroSection.findByIdAndDelete(id);
    if (!deletedSection) {
      return res.status(404).json({ message: "Hero section not found." });
    }
    return res
      .status(200)
      .json({ message: "Hero section deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  createHeroSection,
  getHeroSections,
  updateHeroSection,
  deleteHeroSection,
};

const express = require("express");
const {
  createHeroSection,
  getHeroSections,
  updateHeroSection,
  deleteHeroSection,
} = require("../controllers/Homeherosection");

const router = express.Router();

// Route to create a new hero section
router.post("/", createHeroSection);

// Route to get all hero sections
router.get("/", getHeroSections);

// Route to update a hero section by ID
router.put("/:id", updateHeroSection);

// Route to delete a hero section by ID
router.delete("/:id", deleteHeroSection);

module.exports = router;

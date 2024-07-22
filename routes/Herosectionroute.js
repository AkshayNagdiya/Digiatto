const express = require("express");
const {
  createHeroSection,
  getHeroSections,
  updateHeroSection,
  deleteHeroSection,
} = require("../controllers/Homeherosection");

const router = express.Router();

router.post("/", createHeroSection);

router.get("/", getHeroSections);

router.put("/:id", updateHeroSection);

router.delete("/:id", deleteHeroSection);

module.exports = router;

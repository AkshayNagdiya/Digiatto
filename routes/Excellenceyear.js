const express = require("express");
const {
  getAllExcellenceYears,
  createExcellenceYear,
  getExcellenceYearById,
  deleteExcellenceYear,
  updateExcellenceYear,
} = require("../controllers/Excellenceyear");

const router = express.Router();

router.post("/", createExcellenceYear);
router.get("/", getAllExcellenceYears);
router.get("/:id", getExcellenceYearById);
router.delete("/:id", deleteExcellenceYear);
router.put("/:id", updateExcellenceYear);

module.exports = router;

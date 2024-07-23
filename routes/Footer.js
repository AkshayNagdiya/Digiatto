const express = require("express");
const {
  updateSchemaEntry,
  deleteSchemaEntry,
  getSchemaEntryById,
  getAllSchemaEntries,
  createSchemaEntry,
} = require("../controllers/Footer");

const router = express.Router();

router.post("/", createSchemaEntry);
router.get("/", getAllSchemaEntries);
router.get("/:id", getSchemaEntryById);
router.delete("/:id", deleteSchemaEntry);
router.put("/:id", updateSchemaEntry);

module.exports = router;

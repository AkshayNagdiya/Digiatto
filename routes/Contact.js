const express = require("express");
const {
  createContact,
  updateContact,
  getContact,
  deleteContact,
} = require("../controllers/Contact");
const router = express.Router();

router.post("/", createContact);
router.get("/", getContact);
router.post("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;

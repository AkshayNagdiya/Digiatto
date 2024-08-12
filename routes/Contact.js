const express = require("express");
const {
  createContact,
  updateContact,
  getContact,
  deleteContact,
  getContactById,
} = require("../controllers/Contact");
const router = express.Router();

router.post("/", createContact);
router.get("/", getContact);
router.get("/:id", getContactById);
router.post("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;

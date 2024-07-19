const express = require("express");
const {
  createContact,
  updateContact,
  getContact,
  CreateLinks,
  UpdateLinks,
} = require("../controllers/Contact");
const router = express.Router();

router.post("/create", createContact);
router.post("/create-link", CreateLinks);
router.get("/", getContact);
router.post("/update/:id", updateContact);
router.post("/updatelinks/:id", UpdateLinks);

module.exports = router;

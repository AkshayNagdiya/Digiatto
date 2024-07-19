const express = require("express");
const {
  createExpert,
  getExperts,
  getExpertById,
  deleteExpert,
} = require("../controllers/Expertconnect");

const router = express.Router();

router.post("/", createExpert);
router.get("/", getExperts);
router.get("/:id", getExpertById);
router.delete("/:id", deleteExpert);

module.exports = router;

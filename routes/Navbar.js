const express = require("express");
const {
  getAllNavbars,
  getNavbarById,
  createNavbar,
  updateNavbar,
  deleteNavbar,
} = require("../controllers/Navbar");
const router = express.Router();

router.get("/", getAllNavbars);
router.get("/:id", getNavbarById);
router.post("/", createNavbar);
router.put("/:id", updateNavbar);
router.delete("/:id", deleteNavbar);

module.exports = router;

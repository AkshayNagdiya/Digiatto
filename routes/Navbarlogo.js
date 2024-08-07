const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  createNavbarlogo,
  getnavbarlogo,
  deletenavbarlogo,
} = require("../controllers/Navbarlogo");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Navbarlogo",
    format: async (req, file) => "png",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), createNavbarlogo);
router.delete("/:id", deletenavbarlogo);
router.get("/", getnavbarlogo);

module.exports = router;

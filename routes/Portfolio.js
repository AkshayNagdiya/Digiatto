const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const { createPortfolio } = require("../controllers/Portfolio");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Portfolio",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/create", upload.single("image"), createPortfolio);

module.exports = router;

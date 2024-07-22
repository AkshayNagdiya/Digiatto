const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  UpdateNavlogo,
  CreateNavlogo,
  GetNavlogo,
} = require("../controllers/Navlogo");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Navlogo",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/create", upload.single("image"), CreateNavlogo);
router.post("/update/:id", upload.single("image"), UpdateNavlogo);
router.get("/", GetNavlogo);

module.exports = router;

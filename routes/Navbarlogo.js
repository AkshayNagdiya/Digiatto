const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  createNavbarlogo,
  Updatenavbarlogo,
  getnavbarlogo,
} = require("../controllers/Navbarlogo");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Navbarlogo",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), createNavbarlogo);
router.put("/:id", Updatenavbarlogo);
router.get("/", getnavbarlogo);

module.exports = router;

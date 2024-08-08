const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  Createservice,
  Getservices,
  Updateservice,
} = require("../controllers/Services");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Services-icon",
    format: async (req, file) => "png",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/create", upload.single("image"), Createservice);
router.post("/update/:id", upload.single("image"), Updateservice);

router.get("/", Getservices);

module.exports = router;

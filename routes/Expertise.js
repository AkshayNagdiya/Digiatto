const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  createExpertise,
  deleteExpertise,
  getExpertiseById,
  getAllExpertise,
  updateExpertise,
} = require("../controllers/Expertise");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Expertise",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.get("/", getAllExpertise);
router.post("/", upload.single("image"), createExpertise);
router.get("/:id", getExpertiseById);
router.delete("/:id", deleteExpertise);
router.post("/create", upload.single("image"), updateExpertise);

module.exports = router;

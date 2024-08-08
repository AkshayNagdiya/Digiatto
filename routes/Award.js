const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  createAward,
  deleteAwardById,
  getAllAwards,
} = require("../controllers/Award");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Awardimage",
    format: async (req, file) => "png",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("Awardimage"), createAward);
router.delete("/:id", deleteAwardById);
router.get("/", getAllAwards);

module.exports = router;

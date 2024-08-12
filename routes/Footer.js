const express = require("express");
const {
  updateSchemaEntry,
  deleteSchemaEntry,
  getSchemaEntryById,
  getAllSchemaEntries,
  createSchemaEntry,
} = require("../controllers/Footer");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Footerlogo",
    format: async (req, file) => "png",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("logo"), createSchemaEntry);
router.get("/", getAllSchemaEntries);
router.get("/:id", getSchemaEntryById);
router.delete("/:id", deleteSchemaEntry);
router.put("/:id", upload.single("logo"), updateSchemaEntry);

module.exports = router;

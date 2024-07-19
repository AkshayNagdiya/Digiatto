const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  registerWhatwedo,
  getAllWhatwedo,
  deleteWhatwedot,
  getWhatwedotById,
  updateWhatwedo,
} = require("../controllers/Whatwedo");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "whatwedo",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), registerWhatwedo);

router.get("/", getAllWhatwedo);

router.get("/:id", getWhatwedotById);

router.put("/:id", updateWhatwedo);

router.delete("/:id", deleteWhatwedot);

module.exports = router;

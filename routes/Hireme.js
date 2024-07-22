const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  createHireme,
  getAllHireme,
  deleteHireme,
  getHiremeById,
  updateHireme,
} = require("../controllers/Hireme");
const { getWhatwedotById } = require("../controllers/Hireme");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "HireMe",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), createHireme);

router.get("/", getAllHireme);

router.get("/:id", getHiremeById);

router.put("/:id", updateHireme);

router.delete("/:id", deleteHireme);

module.exports = router;

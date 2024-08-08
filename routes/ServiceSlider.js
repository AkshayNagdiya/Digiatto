const express = require("express");
const router = express.Router();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  registerProduct,
  getAllProducts,
  getById,
  deleteProduct,
} = require("../controllers/ServiceSlider");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aboutusSlider",
    format: async (req, file) => "png", // or any other format you prefer
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("Productimage"), registerProduct);
router.get("/", getAllProducts);
router.get("/:id", getById);
router.delete("/:id", deleteProduct);

module.exports = router;

const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  getAllProjectcategories,
  createProjectcategory,
  updateProjectcategory,
  deleteProjectcategory,
  getProjectcategoryById,
} = require("../controllers/Projectcategory");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Projectcategory",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), createProjectcategory);

router.get("/", getAllProjectcategories);

router.get("/:id", getProjectcategoryById);

router.delete("/:id", deleteProjectcategory);

router.put("/:id", updateProjectcategory);

module.exports = router;

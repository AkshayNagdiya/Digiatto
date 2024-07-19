const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  registerProjectManagment,
  updateProjectManagment,
  deleteProjectManagment,
  getProjectManagmentById,
  getAllProjectManagment,
} = require("../controllers/Projectmanagment");

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

router.post("/", upload.single("image"), registerProjectManagment);
router.get("/", getAllProjectManagment);
router.get("/:id", getProjectManagmentById);
router.delete("/:id", deleteProjectManagment);
router.put("/:id", updateProjectManagment);

module.exports = router;

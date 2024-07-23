const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  GetWeareexpert,
  UpdateWeareexpert,
  CreateWeareexpert,
} = require("../controllers/WeAreExpertin");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "weareexpertin",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), CreateWeareexpert);
router.put("/:id", upload.single("image"), UpdateWeareexpert);
router.get("/", GetWeareexpert);

module.exports = router;

const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const { createsocialLink, updateSocialLink, getSocialLinks, deleteSocialLink } = require("../controllers/SocialLinks");


const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "sociallinkicon",
    format: async (req, file) => "jpeg",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

router.get("/", getSocialLinks);
router.post("/", upload.single("image"), createsocialLink);
router.put("/:id", upload.single("image"), updateSocialLink);
router.delete("/:id", deleteSocialLink);


module.exports = router;

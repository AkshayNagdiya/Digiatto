// const express = require("express");
// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("../../config/Cloudinary");
// const handleNavbarLogoUpload = require("../../controllers/Navbar/Navbarlogo");

// const router = express.Router();

// // Set up Cloudinary storage for image uploads
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "Nav-logo",
//     format: async (req, file) => "jpeg", // or any other format you prefer
//     public_id: (req, file) => `${Date.now()}-${file.originalname}`,
//   },
// });
// const upload = multer({ storage });

// // Route to update the logo (image)
// router.post("/logo", upload.single("image"), handleNavbarLogoUpload);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/Cloudinary");
const {
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/Navbar/Navbarmenu");
const handleNavbarLogoUpload = require("../controllers/Navbar/Navbarlogo");

const router = express.Router();

// Set up Cloudinary storage for image uploads
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Nav-logo",
    format: async (req, file) => "jpeg", // or any other format you prefer
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});
const upload = multer({ storage });

// Route to update the logo (image)
router.post("/logo", upload.single("image"), handleNavbarLogoUpload);

// Route to create a new menu item
router.post("/menu", createMenuItem);

// Route to get all menu items
router.get("/menu", getMenuItems);

// Route to update a menu item by ID
router.put("/menu/:id", updateMenuItem);

// Route to delete a menu item by ID
router.delete("/menu/:id", deleteMenuItem);

module.exports = router;

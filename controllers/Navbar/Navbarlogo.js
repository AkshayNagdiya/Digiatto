// const Navbar = require("../models/Navbar");

// // get navbar
// const getNavbar = async (req, res) => {
//   try {
//     const navbar = await Navbar.findOne();
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }
//     res.json(navbar);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Create a new navbar entry
// const createNavbar = async (req, res) => {
//   const image = req.file ? req.file.path : null;
//   try {
//     const navbarData = { ...req.body, image };
//     const navbar = new Navbar(navbarData);
//     await navbar.save();
//     res.status(201).json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update the navbar entry
// const updateNavbar = async (req, res) => {
//   const image = req.file ? req.file.path : null;

//   try {
//     const { id } = req.params;

//     const updateData = { ...req.body, ...(image && { image }) };

//     const updatedNavbar = await Navbar.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });

//     if (!updatedNavbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     res.json(updatedNavbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete the navbar entry
// const deleteNavbar = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedNavbar = await Navbar.findByIdAndDelete(id);

//     if (!deletedNavbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }
//     res.json({ message: "Navbar deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getNavbar,
//   createNavbar,
//   updateNavbar,
//   deleteNavbar,
// };

// const Navbar = require("../models/Navbar");

// // Get the navbar (all details)
// const getNavbar = async (req, res) => {
//   try {
//     const navbar = await Navbar.findOne();
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }
//     res.json(navbar);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update the logo (image)
// const updateLogo = async (req, res) => {
//   const image = req.file ? req.file.path : null;

//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     navbar.logo.image = image;
//     await navbar.save();

//     res.json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Add a menu item
// const addMenuItem = async (req, res) => {
//   const { name, link } = req.body;

//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     navbar.menu.push({ name, link });
//     await navbar.save();

//     res.status(201).json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update a menu item
// const updateMenuItem = async (req, res) => {
//   const { itemId } = req.params; // Assuming you pass the menu item ID in the URL
//   const { name, link } = req.body;

//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     const menuItem = navbar.menu.id(itemId); // Find menu item by ID
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }

//     menuItem.name = name;
//     menuItem.link = link;
//     await navbar.save();

//     res.json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a menu item
// const deleteMenuItem = async (req, res) => {
//   const { itemId } = req.params; // Assuming you pass the menu item ID in the URL

//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     const menuItem = navbar.menu.id(itemId);
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }

//     menuItem.remove(); // Remove menu item
//     await navbar.save();

//     res.json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Add a button
// const addButton = async (req, res) => {
//   const { name, link } = req.body;

//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     navbar.button = { additionalLink: { name, link } }; // Update or add button
//     await navbar.save();

//     res.status(201).json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update the button
// const updateButton = async (req, res) => {
//   const { name, link } = req.body;

//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     navbar.button.additionalLink = { name, link }; // Update button
//     await navbar.save();

//     res.json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete the button
// const deleteButton = async (req, res) => {
//   try {
//     const navbar = await Navbar.findOne(); // Assumes only one navbar
//     if (!navbar) {
//       return res.status(404).json({ message: "Navbar not found" });
//     }

//     navbar.button = {}; // Clear button
//     await navbar.save();

//     res.json(navbar);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   getNavbar,
//   updateLogo,
//   addMenuItem,
//   updateMenuItem,
//   deleteMenuItem,
//   addButton,
//   updateButton,
//   deleteButton,
// };

const NavbarLogo = require("../../models/Navbar/Navbarlogo"); 

const handleNavbarLogoUpload = async (req, res) => {
  try {
    const image = req.file ? req.file.path : null;

    if (!image) {
      return res.status(400).json({ message: "Image upload failed." });
    }

    const newLogo = new NavbarLogo({ logo: image });
    await newLogo.save();

    return res
      .status(201)
      .json({ message: "Logo uploaded successfully.", logo: newLogo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = handleNavbarLogoUpload;

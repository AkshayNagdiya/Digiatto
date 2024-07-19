const NavbarMenu = require('../../models/Navbar/Navbarmenu');  // Adjust the path as necessary

// Create a new navbar menu item
const createMenuItem = async (req, res) => {
    try {
        const { title, link, order, isVisible, icon } = req.body;
        
        const newMenuItem = new NavbarMenu({ title, link, order, isVisible, icon });
        await newMenuItem.save();
        
        return res.status(201).json({ message: "Menu item created successfully.", menuItem: newMenuItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

// Get all navbar menu items
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await NavbarMenu.find();
        return res.status(200).json(menuItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

// Update a navbar menu item by ID
const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = await NavbarMenu.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: "Menu item not found." });
        }
        return res.status(200).json({ message: "Menu item updated successfully.", menuItem: updatedItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

// Delete a navbar menu item by ID
const deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await NavbarMenu.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Menu item not found." });
        }
        return res.status(200).json({ message: "Menu item deleted successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = {
    createMenuItem,
    getMenuItems,
    updateMenuItem,
    deleteMenuItem
};

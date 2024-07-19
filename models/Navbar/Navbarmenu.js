const mongoose = require('mongoose');

const navbarMenuItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    order: { type: Number, default: 0 },  
    isVisible: { type: Boolean, default: true },  
    icon: { type: String, default: null },  
}, { timestamps: true });

const NavbarMenu = mongoose.model('NavbarMenu', navbarMenuItemSchema);

module.exports = NavbarMenu;

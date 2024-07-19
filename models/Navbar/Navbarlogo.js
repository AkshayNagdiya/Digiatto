const mongoose = require('mongoose');

const navbarLogoSchema = new mongoose.Schema({
    logo: { type: String, required: true }
});

const NavbarLogo = mongoose.model('NavbarLogo', navbarLogoSchema);

module.exports = NavbarLogo;  

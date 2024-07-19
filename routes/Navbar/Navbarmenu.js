const express = require("express");

const router = express.Router();

router.post("/menu", handleNavbarLogoUpload);

module.exports = router;

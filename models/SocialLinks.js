const mongoose = require("mongoose");

const socialLinkSchema = mongoose.Schema({
  image: {
    type: String,
    require: ["please provide icon"],
  },
  link: {
    type: String,
    require: ["please provide link"],
  },
});

const SocialLinks = mongoose.model("SocialLinks", socialLinkSchema);

module.exports = SocialLinks;

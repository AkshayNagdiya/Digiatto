const SocialLinks = require("../models/SocialLinks");

const createsocialLink = async (req, res) => {
  try {
    const { link } = req.body;
    const image = req.file ? req.file.path : null;

    const socialLink = new SocialLinks({
      link,
      image,
    });

    const savedSocialLink = await socialLink.save();

    res.status(201).json(savedSocialLink);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSocialLink = async (req, res) => {
  const { id } = req.params;
  const { link } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    let socialLink = await SocialLinks.findById(id);

    if (!socialLink) {
      return res.status(404).json({ message: "Social link not found" });
    }

    socialLink.link = link;
    socialLink.image = image;

    const updatedSocialLink = await socialLink.save();

    res.status(200).json(updatedSocialLink);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSocialLink = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSocialLink = await SocialLinks.findByIdAndDelete(id);

    if (!deletedSocialLink) {
      return res.status(404).json({ message: "Social link not found" });
    }

    res.json({ message: "Social link deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialLinks = async (req, res) => {
  try {
    const socialLinks = await SocialLinks.find();
    res.status(200).json(socialLinks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createsocialLink,
  updateSocialLink,
  deleteSocialLink,
  getSocialLinks,
};

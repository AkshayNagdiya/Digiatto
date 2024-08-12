const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { companyname, phone, email, address } = req.body;
    const contact = new Contact({
      companyname,
      phone,
      email,
      address,
    });
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ error: errors.join(", ") });
    }
    res.status(500).json({ error: err.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyname, phone, email, address } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { companyname, phone, email, address },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.find();

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({ message: "Contact Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const CreateLinks = async (req, res) => {
  try {
    const links = new socialLinks(req.body);
    const savelinks = await links.save();
    res.status(200).json(savelinks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const UpdateLinks = async (req, res) => {
  try {
    const { id } = req.params;
    const { twitter, facebook, instagram, linkedin, whatsapp } = req.body;

    const updatedLinks = await socialLinks.findByIdAndUpdate(
      id,
      { twitter, facebook, instagram, linkedin, whatsapp },
      { new: true }
    );

    if (!updatedLinks) {
      return res.status(404).json({ error: "Social links not found" });
    }

    res.status(200).json(updatedLinks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getSocialLinksById = async (req, res) => {
  try {
    const { id } = req.params;
    const links = await socialLinks.findById(id);
    if (!links) {
      return res.status(404).json({ error: "Social links not found" });
    }

    res.status(200).json(links);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createContact,
  updateContact,
  getContact,
  getContactById,
  deleteContact,
  CreateLinks,
  UpdateLinks,
  getSocialLinksById,
};

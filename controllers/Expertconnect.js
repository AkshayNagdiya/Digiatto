const Expertconnect = require("../models/Expertconnect");

const createExpert = async (req, res) => {
  const { technology, email, phone, company, message } = req.body;

  if (!technology || !email || !phone || !company) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const expert = new Expertconnect({
      technology,
      email,
      phone,
      company,
      message,
    });
    const savedExpert = await expert.save();
    res.status(201).json(savedExpert);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getExperts = async (req, res) => {
  try {
    const experts = await Expertconnect.find();
    res.json(experts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getExpertById = async (req, res) => {
  try {
    const expert = await Expertconnect.findById(req.params.id);
    if (!expert) {
      return res.status(404).json({ error: "Expert not found" });
    }
    res.json(expert);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteExpert = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpert = await Expertconnect.findByIdAndDelete(id);
    if (!deletedExpert) {
      return res.status(404).json({ error: "Expert not found" });
    }
    res.json({ message: "Expert deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createExpert,
  getExperts,
  getExpertById,
  deleteExpert,
};

const Portfolio = require("../models/Portfolio");

const createPortfolio = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const image = req.file ? req.file.path : null;

    const portfolio = new Portfolio({
      title,
      subtitle,
      description,
      image,
    });

    const savedPortfolio = await portfolio.save();

    res.status(201).json(savedPortfolio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPortfolioById = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = await Portfolio.findById(id);

    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, description } = req.body;
    const image = req.file ? req.file.path : null;

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      id,
      { title, subtitle, description, image },
      { new: true }
    );

    if (!updatedPortfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    res.json(updatedPortfolio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPortfolio = await Portfolio.findByIdAndDelete(id);

    if (!deletedPortfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    res.json({ message: "Portfolio deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPortfolio,
  getAllPortfolios,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio,
};

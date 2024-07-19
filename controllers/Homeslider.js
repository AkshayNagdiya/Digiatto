const Homeslider = require("../models/Homeslider");

const registerProduct = async (req, res) => {
  const { Productname } = req.body;
  const image = req.file ? req.file.path : null;

  if (!Productname || !image) {
    return res
      .status(400)
      .json({ message: "Please provide product name and image." });
  }

  try {
    const product = await Homeslider.create({
      Productname,
      Productimage: image,
    });

    return res.status(201).json({
      Productname: product.Productname,
      Productimage: product.Productimage,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Homeslider.find({}, "Productname Productimage"); // Only select name and image
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Homeslider.findById(
      productId,
      "Productname Productimage"
    ); // Only select name and image
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Homeslider.findByIdAndDelete(productId);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerProduct,
  getAllProducts,
  getById,
  deleteProduct,
};

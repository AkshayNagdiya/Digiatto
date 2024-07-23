const Serviceslider = require("../models/ServiceSlider");

// Register a new product
const registerProduct = async (req, res) => {
  const { Productname } = req.body;
  const Productimage = req.file ? req.file.path : null;

  if (!Productname || !Productimage) {
    return res
      .status(400)
      .json({ message: "Please provide product name and image." });
  }

  try {
    const product = await Serviceslider.create({
      Productname,
      Productimage,
    });

    return res.status(201).json({
      Productname: product.Productname,
      Productimage: product.Productimage,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Serviceslider.find({}, "Productname Productimage");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product by ID
const getById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Serviceslider.findById(
      productId,
      "Productname Productimage"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Serviceslider.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

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

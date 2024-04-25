import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      message: "Product created sucessfully",
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating product",
      error: err,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productCount = products.length;
    res.status(200).json({
      message: `${productCount} Products retrieved successfully`,
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving products",
      error: err,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();
    const products = await Product.find({ category: { $regex: category, $options: 'i' } });
    const productCount = products.length;
    res.status(200).json({
      message: `${productCount} Products retrieved successfully`,
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving products",
      error: err,
    });
  }
};

export { createProduct, getAllProducts, getProductsByCategory };

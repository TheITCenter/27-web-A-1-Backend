import express from 'express'
import {
  createProduct,
  getAllProducts,
  getProductsByCategory
 
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:category", getProductsByCategory);

export default productRoutes;

import express from 'express'
import {
  createProduct,
  getAllProducts
 
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);


export default productRoutes;

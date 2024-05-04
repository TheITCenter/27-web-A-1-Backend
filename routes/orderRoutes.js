import express from 'express'
import {
    createOrder, getAllOrders, getOrdersByUserName
 
} from "../controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes.post("/", createOrder);
orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:userName", getOrdersByUserName);

export default orderRoutes;

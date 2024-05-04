import Order from "../models/orderModel.js";

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(200).json({
      message: "Order Created Successfully",
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating product",
      error: err,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    const ordersCount = orders.length;
    res.status(200).json({
      message: `${ordersCount} Orders retrieved successfully`,
      orders,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving orders",
      error: err,
    });
  }
};

const getOrdersByUserName = async (req, res) => {
  try {
    const userName = req.params.username;
    const orders = await Order.find({ username: userName });
    const ordersCount = orders.length;
    res.status(200).json({
        message: `${ordersCount} Orders retrieved successfully`,
        orders,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error retrieving orders",
        error: err,
    });
  }
};

export { createOrder, getAllOrders, getOrdersByUserName };

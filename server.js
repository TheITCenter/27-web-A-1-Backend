import express from "express";
import { connect } from "./config.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const api = express();
const PORT = 8000;
connect();

api.use(express.json());
api.use("/auth", authRoutes);
api.use('/products', productRoutes)

api.listen(PORT, () => {
  console.log(`API running on ${PORT}`);
});

api.use((error, req, res, next) => {
  if (error instanceof SyntaxError && "body" in error) {
    res.status(400).json({
      message: "Error: Invalid JSON format",
      error: error.message,
    });
  } else {
    res.status(500).json({
      message: "Error: Internal server error",
      error: error.message,
    });
  }
});

import express from "express";
import {
  getProductList,
  getProductById,
  addNewProduct,
} from "./product.controller.js";

const productRouter = express();

productRouter.get("/list", getProductList);
productRouter.get("/:id", getProductById);
productRouter.post("/create", addNewProduct);

export default productRouter;

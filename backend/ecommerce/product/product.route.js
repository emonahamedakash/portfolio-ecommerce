import express from "express";
import { getProductList, getProductById } from "./product.controller.js";

const productRouter = express();

productRouter.get("/list", getProductList);
productRouter.get("/:id", getProductById);

export default productRouter;

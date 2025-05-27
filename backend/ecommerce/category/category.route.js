import { createCategory, getCategoryList } from "./category.controller.js";
import express from "express";

const categoryRouter = express();

categoryRouter.get("/list", getCategoryList);
categoryRouter.post("/create", createCategory);

export default categoryRouter;

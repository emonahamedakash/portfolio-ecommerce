import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./config/db.js";
import categoryRouter from "./ecommerce/category/category.route.js";
import productRouter from "./ecommerce/product/product.route.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/ecommerce/category", categoryRouter);
app.use("/api/ecommerce/product", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(port, () => {
  db.raw("SELECT 1")
    .then(() => {
      console.log("✅ DB Connected");
    })
    .catch((err) => {
      console.log(`❌ DB Not Connected\n${err}`);
    });
  console.log(`Server is running at http://localhost:${port}`);
});

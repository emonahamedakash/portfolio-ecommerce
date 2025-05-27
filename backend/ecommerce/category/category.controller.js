import db from "../../config/db.js";
import { DateTime } from "luxon";
export const getCategoryList = async (req, res) => {
  try {
    const categoryList = await db("ecommerce_categories").select("*");
    if (categoryList.length === 0) {
      res.status(404).json({
        flag: "FAIL",
        message: "No data found",
      });
    }

    res.status(200).json({
      flag: "Success",
      data: categoryList,
    });
  } catch (err) {
    console.log(err);
  }
};
export const createCategory = async (req, res) => {
  const { title } = req.body;
  const now = DateTime.now();
  const mysqlDateFormat = now.toFormat("yyyy-MM-dd HH:mm:ss");
  try {
    const [id] = await db("ecommerce_categories").insert({
      title: title,
      created_at: mysqlDateFormat,
    });
    if (!id) {
      res.status(404).json({
        flag: "FAIL",
        message: "Someting went wrong",
      });
    }
    res.status(201).json({
      flag: "SUCCESS",
      message: "Category Created Successfully",
      data: id,
    });
  } catch (err) {
    console.log(err);
  }
};

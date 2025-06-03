import { formatISO } from "date-fns";
import db from "../../config/db.js";

export const uploadProductImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        flag: "FAIL",
        message: "No image file uploaded",
      });
    }

    const imageUrl = `/upload/ecommerce/products/${req.file.filename}`;

    return res.status(200).json({
      flag: "SUCCESS",
      message: "Image uploaded successfully",
      data: {
        image_url: imageUrl,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      flag: "FAIL",
      message: "Failed to upload image",
      error: err.message,
    });
  }
};

export const addNewProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    category_id,
    stock,
    image_url,
    main_image,
  } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      flag: "FAIL",
      message: "Missing required fields (name, price, category_id, stock)",
    });
  }

  const now = new Date();
  const utcDateString = formatISO(now);

  try {
    const [id] = await db("ecommerce_products").insert({
      name,
      price,
      description,
      category_id,
      stock,
      image_url,
      main_image,
      status: 1,
      is_deleted: 0,
      created_at: utcDateString,
      updated_at: null,
    });

    if (!id) {
      return res.status(500).json({
        flag: "FAIL",
        message: "Failed to create product",
      });
    }

    return res.status(201).json({
      flag: "SUCCESS",
      message: "Product created successfully",
      data: id,
    });
  } catch (err) {
    console.error("Error adding new product:", err);
    return res.status(500).json({
      flag: "FAIL",
      message: "Internal server error",
      error: err.message,
    });
  }
};

export const getProductList = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category_id,
      search,
      min_price,
      max_price,
      status,
    } = req.query;
    const offset = (page - 1) * limit;

    // Base query
    let query = await db("ecommerce_products as products")
      .select("*")
      .where("products.is_deleted", 0)
      .orderBy("products.created_at", "desc");

    // if (category_id) {
    //   query = query.where("products.category_id", category_id);
    // }

    // if (search) {
    //   query = query.where(function () {
    //     this.where("products.name", "like", `%${search}%`)
    //       .orWhere("products.description", "like", `%${search}%`)
    //       .orWhere("categories.title", "like", `%${search}%`);
    //   });
    // }

    // if (min_price) {
    //   query = query.where("products.price", ">=", min_price);
    // }

    // if (max_price) {
    //   query = query.where("products.price", "<=", max_price);
    // }

    // if (status) {
    //   query = query.where("products.status", status);
    // }

    // const totalQuery = db("ecommerce_products as products")
    //   .leftJoin(
    //     "ecommerce_categories as categories",
    //     "products.category_id",
    //     "categories.id"
    //   )
    //   .where("products.is_deleted", 0)
    //   .count("* as total")
    //   .first();
    // const totalResult = await totalQuery.first();
    // const total = parseInt(totalResult.total);

    // const productList = await query.limit(limit).offset(offset);

    return res.status(200).json({
      success: true,
      data: query,
      // data: {
      //   products: productList,
      //   pagination: {
      //     total,
      //     page: Number(page),
      //     limit: Number(limit),
      //     totalPages: Math.ceil(total / limit),
      //     hasNextPage: page * limit < total,
      //     hasPrevPage: page > 1,
      //   },
      // },
    });
  } catch (err) {
    console.error("Error fetching product list:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({
      flag: "FAIL",
      message: "Invalid product ID",
    });
  }

  try {
    const product = await db("ecommerce_products as products")
      .select(
        "products.id",
        "products.name",
        "products.price",
        "products.description",
        "products.category_id",
        "products.stock",
        "products.image_url",
        "products.main_image",
        "products.status",
        "products.created_at",
        "products.updated_at",
        "categories.name as category_name"
      )
      .leftJoin(
        "ecommerce_categories as categories",
        "products.category_id",
        "categories.id"
      )
      .where("products.id", id)
      .where("products.is_deleted", 0)
      .first();

    if (!product) {
      return res.status(404).json({
        flag: "FAIL",
        message: "Product not found",
      });
    }

    return res.status(200).json({
      flag: "SUCCESS",
      data: product,
    });
  } catch (err) {
    console.error(`Error fetching product with ID ${id}:`, err);
    return res.status(500).json({
      flag: "FAIL",
      message: "Failed to fetch product",
      error: err.message,
    });
  }
};

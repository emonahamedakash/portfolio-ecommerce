import React, { useEffect, useState } from "react";
import AdminNavigationBar from "../../../../layout/AdminNavigationBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { baseUrl } from "../../../../../baseUrl";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(12);
  const [stock, setStock] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/ecommerce/category/list"
    );
    console.log(response);
    setCategories(response.data.data);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Assuming you have a loading state
      const response = await axios.post(`${baseUrl}/product/create`, {
        name,
        price,
        description,
        category_id: categoryId,
        stock,
        image_url: "No Image Data", // TODO: Implement actual image upload
        main_image: "No image data",
      });

      // Optional: show success message
      alert("Product created successfully!");
      navigate("/admin/product/list");
    } catch (err) {
      console.error("Error creating product:", err);
      // Show error to user
      alert(`Error: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <AdminNavigationBar />
      <h1 className="text-4xl text-center mt-5">Add New Product</h1>
      <div className="shadow-md rounded-xl my-10 border mx-auto">
        {/* name, price, description, category_id, stock, image_url */}
        <form className="p-15 flex-col gap-10 my-10" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name" className="mb-3">
              Product Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <Label htmlFor="description" className="mb-3">
              Description
            </Label>
            <Textarea
              id="description"
              type="text"
              placeholder="Enter Product Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <div className="md:grid md:grid-cols-2 md:gap-5">
            <div>
              <Label htmlFor="price" className="mb-3">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="category" className="mb-3">
                Category
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {categories?.map((each) => {
                      return (
                        <SelectItem
                          value={each.title}
                          key={each.id}
                          className="capitalize"
                        >
                          {each.title}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <br />
          <div className="md:grid md:grid-cols-2 md:gap-5">
            <div>
              <Label htmlFor="stock" className="mb-3">
                Stock
              </Label>
              <Input
                id="stock"
                type="number"
                placeholder="Stock"
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="product_image" className="mb-3">
                Upload Product Image
              </Label>
              <Input id="product_image" type="file" placeholder="Image" />
            </div>
          </div>
          <br />
          <div>
            <Button type="submit" className="cursor-pointer">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

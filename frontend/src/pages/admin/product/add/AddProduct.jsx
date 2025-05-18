import React, { useState } from "react";
import AdminNavigationBar from "../../../../layout/AdminNavigationBar";
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

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="dress">Dress</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="makeup">Makeup</SelectItem>
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

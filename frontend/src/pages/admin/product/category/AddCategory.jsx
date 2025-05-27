import React, { useState } from "react";
import AdminNavigationBar from "../../../../layout/AdminNavigationBar";
import axios from "axios";
import { baseUrl } from "../../../../../baseUrl";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`${baseUrl}/category/create`, {
        title: categoryTitle,
      });
      if (response) {
        navigate("/admin/product/category");
      } else {
        toast.error("Something went wrong", { autoClose: 1500 });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <h1 className="text-4xl text-center mt-5">Add New Category</h1>
      <div className="shadow-md rounded-xl my-10 border mx-auto">
        <form className="p-15 flex-col gap-10 my-10" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title" className="mb-3">
              Category Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Category Title"
              onChange={(e) => setCategoryTitle(e.target.value)}
            />
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

export default AddCategory;

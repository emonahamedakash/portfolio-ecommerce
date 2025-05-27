import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import AddCategory from "./AddCategory";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminNavigationBar from "../../../../layout/AdminNavigationBar";
import { toast } from "react-toastify";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/ecommerce/category/list"
    );
    console.log(response);
    if (response.data.data.length === 0) {
      toast.error("No Data Found");
    }
    setCategories(response.data.data);
  };
  const [categoryList, setCategoryList] = useState(categories);
  const navigate = useNavigate();
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <AdminNavigationBar />
      <h1 className="text-4xl text-center mt-5">Category List</h1>
      <div className="shadow-xl border rounded-2xl my-5">
        <div className="md:w-[700px] my-10 mx-auto">
          <Button
            variant="outline"
            className="md:w-[700px] hover:cursor-pointer border-2"
            onClick={() => navigate("/admin/product/add-category")}
          >
            Add New Category
          </Button>
        </div>
        <div className="px-20 pb-10">
          <Table>
            <TableCaption>Category List.</TableCaption>
            <TableHeader>
              <TableRow className="[&>*]:p-5">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead className="text-right">Category Title</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow className="[&>*]:p-5" key={category.id}>
                  <TableCell className="font-medium">{category.id}</TableCell>
                  <TableCell className="text-right capitalize">
                    {category.title}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

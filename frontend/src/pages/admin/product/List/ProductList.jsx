import React from "react";
import AdminNavigationBar from "../../../../layout/AdminNavigationBar";
import { Button } from "@/components/ui/button";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  //name, price, description, category_id, stock, image_url
  const products = [
    {
      id: 1,
      name: "Iphone 16 Pro Max",
      description: "Demo Description",
      price: 130000,
      categoryId: 1,
      stock: 30,
      imageUrl: "image.jpg",
      status: 1,
    },
    {
      id: 2,
      name: "Iphone 16 Pro Max",
      description: "Demo Description",
      price: 130000,
      categoryId: 1,
      stock: 30,
      imageUrl: "image.jpg",
      status: 1,
    },
    {
      id: 3,
      name: "Iphone 16 Pro Max",
      description: "Demo Description",
      price: 130000,
      categoryId: 1,
      stock: 30,
      imageUrl: "image.jpg",
      status: 1,
    },
    {
      id: 4,
      name: "Iphone 16 Pro Max",
      description: "Demo Description",
      price: 130000,
      categoryId: 1,
      stock: 30,
      imageUrl: "image.jpg",
      status: 0,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <AdminNavigationBar />
      <h1 className="text-4xl text-center mt-5">Product List</h1>
      <div className="shadow-xl border rounded-2xl my-5">
        <div className="md:w-[700px] my-10 mx-auto">
          <Button
            variant="outline"
            className="md:w-[700px] hover:cursor-pointer border-2"
            onClick={() => navigate("/admin/product/add")}
          >
            Add Product
          </Button>
        </div>
        <div className="px-20 pb-10">
          <Table>
            <TableHeader>
              <TableRow className="[&>*]:p-5">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow className="[&>*]:p-5" key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.imageUrl}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.categoryId}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell className="text-right capitalize">
                    {product.status == 1 ? (
                      <span className="text-green-800 bg-green-200 rounded-full px-3 py-1">
                        Active
                      </span>
                    ) : (
                      <span className="text-orange-800 bg-orange-200 rounded-full px-2 py-1">
                        Inactive
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className="border-t-2">
            <PaginationContent className="mt-5">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

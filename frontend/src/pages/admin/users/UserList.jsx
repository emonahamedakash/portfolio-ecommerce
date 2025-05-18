import React from "react";
import AdminNavigationBar from "../../../layout/AdminNavigationBar";
import {
  Table,
  TableBody,
  TableCell,
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

const UserList = () => {
  const users = [
    {
      id: 1,
      email: "test@gmail.com",
      phone: "01712345678",
      gender: 1,
      fullName: "John Doe",
      userName: "johndoe2025",
      address: "Dhaka",
      birthDate: "12/12/2000",
      totalOrder: 10,
      totalCancel: 2,
      createdAt: "07/04/2025",
      status: 1,
    },
    {
      id: 2,
      email: "test@gmail.com",
      phone: "01712345678",
      gender: 2,
      fullName: "John Doe",
      userName: "johndoe2025",
      address: "Dhaka",
      birthDate: "12/12/2000",
      totalOrder: 10,
      totalCancel: 2,
      createdAt: "07/04/2025",
      status: 1,
    },
    {
      id: 3,
      email: "test@gmail.com",
      phone: "01712345678",
      gender: 1,
      fullName: "John Doe",
      userName: "johndoe2025",
      address: "Dhaka",
      birthDate: "12/12/2000",
      totalOrder: 10,
      totalCancel: 2,
      createdAt: "07/04/2025",
      status: 0,
    },
    {
      id: 4,
      email: "test@gmail.com",
      phone: "01712345678",
      gender: 2,
      fullName: "John Doe",
      userName: "johndoe2025",
      address: "Dhaka",
      birthDate: "12/12/2000",
      totalOrder: 10,
      totalCancel: 2,
      createdAt: "07/04/2025",
      status: 2,
    },
    {
      id: 5,
      email: "test@gmail.com",
      phone: "01712345678",
      gender: 1,
      fullName: "John Doe",
      userName: "johndoe2025",
      address: "Dhaka",
      birthDate: "12/12/2000",
      totalOrder: 10,
      totalCancel: 2,
      createdAt: "07/04/2025",
      status: 1,
    },
    {
      id: 6,
      email: "test@gmail.com",
      phone: "01712345678",
      gender: 1,
      fullName: "John Doe",
      userName: "johndoe2025",
      address: "Dhaka",
      birthDate: "12/12/2000",
      totalOrder: 10,
      totalCancel: 2,
      createdAt: "07/04/2025",
      status: 0,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <AdminNavigationBar />
      <h1 className="text-4xl text-center mt-5">User List</h1>
      <div className="shadow-xl border rounded-2xl my-5">
        <div className="px-20 pb-10">
          <Table>
            <TableHeader>
              <TableRow className="[&>*]:p-5">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow className="[&>*]:p-5" key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    {user.gender == 1 ? (
                      <span className="text-green-800 bg-green-200 rounded-full px-3 py-1">
                        Male
                      </span>
                    ) : (
                      <span className="text-pink-800 bg-pink-200 rounded-full px-3 py-1">
                        Female
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.totalOrder}</TableCell>
                  <TableCell className="text-right capitalize">
                    {user.status == 1 ? (
                      <span className="text-green-800 bg-green-200 rounded-full px-3 py-1">
                        Active
                      </span>
                    ) : user.status == 0 ? (
                      <span className="text-orange-800 bg-orange-200 rounded-full px-2 py-1">
                        Inactive
                      </span>
                    ) : (
                      <span className="text-slate-800 bg-slate-200 rounded-full px-2 py-1">
                        Disabled
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

export default UserList;

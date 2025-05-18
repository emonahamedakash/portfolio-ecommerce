import NavigationBar from "./layout/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/client/auth/login/Login";
import Homepage from "./pages/client/home/Homepage";
import Footer from "./layout/Footer";
import Register from "./pages/client/auth/register/Register";

//Admin Imports
import AdminLogin from "./pages/admin/auth/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ProductList from "./pages/admin/product/List/ProductList";
import AddProduct from "./pages/admin/product/add/AddProduct";
import CategoryList from "./pages/admin/product/category/CategoryList";
import AddCategory from "./pages/admin/product/category/AddCategory";
import OrderList from "./pages/admin/order/OrderList";
import UserList from "./pages/admin/users/UserList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/client/login" element={<Login />} />
          <Route path="/client/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product/list" element={<ProductList />} />
          <Route path="/admin/product/add" element={<AddProduct />} />
          <Route path="/admin/product/category" element={<CategoryList />} />
          <Route path="/admin/product/add-category" element={<AddCategory />} />
          <Route path="/admin/order/list" element={<OrderList />} />
          <Route path="/admin/user/list" element={<UserList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

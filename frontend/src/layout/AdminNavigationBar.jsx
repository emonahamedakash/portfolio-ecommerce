import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const AdminNavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div className="md:max-w-[1280px] mx-auto shadow-md p-5 rounded-sm">
      <div className="md:flex md:justify-center gap-5 my-3 [&>*]:min-w-40 [&>*]:cursor-pointer">
        <Button variant="outline" onClick={() => navigate("/admin/dashboard")}>
          Dashboard
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/product/list")}
        >
          Product List
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/product/add")}
        >
          Add Product
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/product/category")}
        >
          Categories
        </Button>
        <Button variant="outline" onClick={() => navigate("/admin/order/list")}>
          Orders
        </Button>
        <Button variant="outline" onClick={() => navigate("/admin/user/list")}>
          Users
        </Button>
      </div>
    </div>
  );
};

export default AdminNavigationBar;

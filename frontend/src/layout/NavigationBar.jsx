import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div className="md:w-full border flex justify-center align-middle gap-15 bg-[#3F51B5] py-4 text-white shadow-md">
      <div>
        <img
          onClick={() => navigate("/")}
          className="h-10 cursor-pointer"
          src="/logo/logo-transparent-white-horizontal.png"
          alt="logo"
        />
      </div>
      <div className="min-w-[350px] flex">
        <Input className="bg-white" type="text" placeholder="search" />
      </div>
      <div className="flex">
        <span className="font-bold font-sans">Cart</span>
        <ShoppingCart />
      </div>
      <div>
        <Button
          className="bg-white text-black hover:bg-slate-300 cursor-pointer"
          onClick={() => navigate("/client/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;

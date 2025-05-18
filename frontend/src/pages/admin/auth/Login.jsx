import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="md:min-h-[500px] md:max-w-[1280px] mx-auto">
      <div className="shadow-md rounded-xl my-20 border md:max-w-[500px] mx-auto">
        <form className="p-15 flex-col gap-10 my-10" onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl mb-10 border-b-1">Admin Login</h2>
          <div>
            <Label htmlFor="username" className="mb-3">
              User Name
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <Label htmlFor="password" className="mb-3">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <Button type="submit" className="cursor-pointer">
              Login
            </Button>
            <div className="mt-10 flex justify-between border-t-1 py-3">
              <p>If you are not admin?</p>
              <Button
                variant="outline"
                className=" cursor-pointer"
                onClick={() => navigate("/client/login")}
              >
                Client Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

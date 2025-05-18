import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="md:min-h-[500px] md:max-w-[1280px] mx-auto">
      <div className="shadow-md rounded-xl my-20 border md:max-w-[600px] mx-auto">
        <form className="p-15 my-10" onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl mb-10 border-b-1">
            Register now
          </h2>
          <div>
            <Label htmlFor="email" className="mb-3">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <Label htmlFor="phone" className="mb-3">
              Phone
            </Label>
            <Input
              id="phone"
              type="phone"
              placeholder="Mobile Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
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
              Register
            </Button>
            <div className="mt-10 flex justify-between align-middle border-t-1 py-3">
              <p>Already have an account?</p>
              <Button
                variant="outline"
                className=" cursor-pointer"
                onClick={() => navigate("/client/login")}
              >
                Login now
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

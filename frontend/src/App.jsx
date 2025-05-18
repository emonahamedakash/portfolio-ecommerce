import { Button } from "@/components/ui/button";
import NavigationBar from "./layout/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/client/auth/login/Login";
import Homepage from "./pages/client/home/Homepage";
import Footer from "./layout/Footer";
import Register from "./pages/client/auth/register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/client/login" element={<Login />} />
          <Route path="/client/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

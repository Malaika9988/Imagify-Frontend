import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import End from "./components/End";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";



const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right"/>
      <Navbar />
      {showLogin && <Login />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/BuyCredit" element={<BuyCredit />} />
      </Routes>
      <End />
    </div>
  );
};

export default App;

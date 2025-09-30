import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import ClientPage from "./pages/Clientpage";
import ErrorScreen from "./pages/ErrorScreen";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import "./app.css"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/:id/:name" element={<ClientPage />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

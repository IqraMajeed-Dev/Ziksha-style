import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <h1>ZIQSHA Styles</h1>
      <p>Your destination for premium clothing.</p>
      <Link to="/products" className="shop-now-button">Shop Now</Link>
    </div>
  );
};

export default Home;

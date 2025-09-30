import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FEASTFLOW</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        {!isLoggedIn ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <button onClick={handleLogoutClick} className="logout-button">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

const Navbar = () => {
  const { amount } = useContext(GlobalContext);
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <h1>Shop with us</h1>
      </div>
      <div className="navbar-btn-container">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/storage"} className="storage-btn">
          <button>Storage</button>
          <p>{amount}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

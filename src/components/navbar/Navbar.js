import React from "react";
import { BsCart4 } from "react-icons/bs";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import "./Navbar.scss";
const Navbar = () => {
  const TotalItemsInCart = useSelector((e) => e.Cart);

  return (
    <div id="navbar">
      <Link to="/">
        <div id="logo">
          <RiShoppingBag3Fill />
        </div>
      </Link>
      {/* <div id="catogry-links">
        <ul onClick={handleClick}>
          {category.map((c, i) => (
            <li key={i}>{c.toUpperCase()}</li>
          ))}
        </ul>
      </div> */}
      <div className="user_area">
        <Link to="/cart">
          <p className="cart_icon">
            <BsCart4 />
            <span id="items_count">{TotalItemsInCart.length}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

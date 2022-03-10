import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainerTopic">
        <h1>
          <span>S</span>hopping Cart
        </h1>
      </div>
      <div className="HeaderContainerCart">
        <div className="HeaderContainerCartImageInput">
          <h3>Cart</h3>
          <ShoppingCartIcon
            style={{ color: "white", margin: "auto", padding: "10px" }}
          />
          <input type="text" value="1" />
        </div>
      </div>
    </div>
  );
}

export default Header;

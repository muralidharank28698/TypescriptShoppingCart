import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainerTopic">
        <Link to="/" className="HeaderContainerTopic-Link">
          <h1>
            <span>S</span>hopping Cart
          </h1>
        </Link>
      </div>
      <div className="HeaderContainerCart">
        <Link to="/Carts" className="HeaderContainerCartLink">
          <div className="HeaderContainerCartImageInput">
            <h3>Cart</h3>
            <ShoppingCartIcon
              style={{ color: "white", margin: "auto", padding: "10px" }}
            />
            <input type="text" value="1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

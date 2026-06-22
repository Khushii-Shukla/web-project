import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        amazon
      </Link>

      <input
        type="text"
        className="search"
        placeholder="Search Amazon"
      />

      <Link to="/cart" className="cart">
        Cart ({cart.length})
      </Link>
    </header>
  );
}

export default Header;
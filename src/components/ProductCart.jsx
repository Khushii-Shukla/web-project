import "./ProductCart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <Link
        to={`/product/${product.id}`}
        className="productLink"
      >
        <img
          src={product.image}
          alt={product.title}
        />

        <h3>{product.title}</h3>

        <p className="price">
          ₹{product.price.toLocaleString()}
        </p>
      </Link>

      <button
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
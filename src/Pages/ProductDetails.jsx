import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="details">

      <img
        src={product.image}
        alt={product.title}
      />

      <div>
        <h1>{product.title}</h1>

        <h2>
          ₹
          {product.price.toLocaleString()}
        </h2>

        <p>
          {product.description}
        </p>

        <button
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;
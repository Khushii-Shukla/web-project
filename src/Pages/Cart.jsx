import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cartPage">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              className="cartItem"
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>
                <p>
                  ₹
                  {item.price.toLocaleString()}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2 className="total">
            Total: ₹
            {total.toLocaleString()}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
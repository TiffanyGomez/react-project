import React, { useState } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Running Shoes", price: 49.99, quantity: 1 },
    { id: 2, name: "Basketball Shoes", price: 89.99, quantity: 2 },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart__items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart__item">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <div className="cart__item-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="remove">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart__summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button className="checkout">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

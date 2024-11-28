import React from "react";
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Shoe A", price: 49.99, quantity: 2 },
    { id: 2, name: "Shoe B", price: 69.99, quantity: 1 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h2 className="item-name">{item.name}</h2>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
            <p className="item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="cart-total-container">
          <h2 className="cart-total-label">Total</h2>
          <p className="cart-total">${total.toFixed(2)}</p>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

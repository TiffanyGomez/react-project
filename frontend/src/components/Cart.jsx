import React from "react";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Stylish Shoe 1",
      image: "/images/Men/Sport/Basket/basketball1.png",
      price: 49.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Stylish Shoe 2",
      image: "/images/Men/Sport/Basket/basketball2.png",
      price: 59.99,
      quantity: 2,
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="product-image-cart" />
            <div>
              <h2 className="product-title">{item.name}</h2>
              <p className="product-price">${item.price.toFixed(2)}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
            <div>
              <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total-container">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total">${total.toFixed(2)}</span>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;

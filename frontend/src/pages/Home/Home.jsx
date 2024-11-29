import React from "react";
import styled from "styled-components";
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Steppy</h1>
        <p>👟 Where Each Step Becomes a New Adventure! 👟</p>
        <button>Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="exemple">
              <div className="bg" />
              <div className="blob" />
              <img
                src={`/images/Men/Sport/Basket/basketball${index + 1}.png`}
                alt={`Shoe ${index + 1}`}
                className="product-image"
              />
              <h3 className="product-title">Stylish Shoe {index + 1}</h3>
              <p className="product-price">$49.99</p>
              <button className="product-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
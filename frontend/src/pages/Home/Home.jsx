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
            <ProductCard key={index}>
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
            </ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
const ProductCard = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease;

  /* Effet de survol */
  &:hover {
    transform: translateY(-10px); /* Élève légèrement la carte */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08); /* Ombre douce */
    background: rgba(255, 255, 255, 1); /* Renforce la couleur de fond */
    border: 3px solid #291711; /* Contour marron au survol */
  }

  .product-image {
    width: 150px;
    height: 150px;
    object-fit: contain;
    z-index: 3;
    transition: transform 0.3s ease;
  }

  .product-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
    z-index: 3;
    transition: color 0.3s ease;
  }

  .product-price {
    font-size: 1.2rem;
    color: #666;
    z-index: 3;
    transition: color 0.3s ease;
  }

  .product-button {
    background-color: #291711;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    z-index: 3;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #008080;
      transform: scale(1.1); /* Agrandit le bouton */
    }
  }

  /* Effet d'animation de l'image au survol */
  &:hover .product-image {
    transform: scale(1.1); /* Agrandit légèrement l'image */
  }

  
`;

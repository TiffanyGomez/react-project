import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/Products.css";

const Products = () => {
  const { category, subcategory } = useParams();

  const products = [
    { id: 1, name: "Formal Shoe 1", category: "men", subcategory: "formal-shoes", price: 59.99 },
    { id: 2, name: "Casual Shoe 1", category: "men", subcategory: "casual-shoes", price: 49.99 },
    { id: 3, name: "Boot 1", category: "men", subcategory: "boots", price: 79.99 },
    { id: 4, name: "Casual Shoe 2", category: "women", subcategory: "casual-shoes", price: 39.99 },
    { id: 5, name: "Sports Shoe 1", category: "kids", subcategory: "sports-shoes", price: 29.99 },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.category === category.toLowerCase() &&
      product.subcategory === subcategory.toLowerCase()
  );

  return (
    <div className="products-page">
      <h1 className="page-title">
        {subcategory.replace(/-/g, " ")} for {category}
      </h1>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="no-products">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

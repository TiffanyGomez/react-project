import React from "react";
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Steppy</h1>
        <p className="mt-4 text-lg">👟 Where Each Step Becomes a New Adventure ! 👟</p>
        <button className="mt-6 bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow rounded hover:shadow-lg transition"
            >
              <img
                src={`/images/Men/Sport/Basket/basketball${index + 1}.png`}
                alt={`Shoe ${index + 1}`}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Stylish Shoe {index + 1}
              </h3>
              <p className="mt-2 text-gray-600">$49.99</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Browse Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-4">
          {["Men's Shoes", "Women's Shoes", "Kids' Shoes", "Sports Shoes"].map(
            (category, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded text-center hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {category}
                </h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow rounded hover:shadow-lg transition"
            >
              <p className="text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shoe
                Haven has the best collection!"
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Customer {index + 1}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-500 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold">Stay Updated</h2>
        <p className="mt-2">Subscribe to our newsletter for exclusive deals</p>
        <form className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-l focus:outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-r hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;

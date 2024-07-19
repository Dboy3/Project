import React from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 h-96 flex items-center justify-center">
        <img
          src=""
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-xl mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 transition hover:shadow-xl"
            >
              <img
                src={`https://via.placeholder.com/150?text=Product+${
                  index + 1
                }`}
                alt={`Product ${index + 1}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Product {index + 1}
              </h3>
              <p className="text-gray-700 mb-4">$99.99</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Furniture", "Electronics", "Clothing", "Books"].map(
            (category, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl"
              >
                <img
                  src={`https://via.placeholder.com/400x300?text=${category}`}
                  alt={category}
                  className="w-full h-48 object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category}</h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["John Doe", "Jane Smith", "Bob Johnson"].map((name, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition hover:shadow-xl"
            >
              <p className="text-gray-700 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante."
              </p>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-500">Happy Customer</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-blue-500 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-6">
            Get the latest updates on new products and upcoming sales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/2 p-3 mb-4 sm:mb-0 sm:mr-4 rounded-lg text-black"
            />
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 py-8 px-4 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Order Tracking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          &copy; 2024 Your Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Home;

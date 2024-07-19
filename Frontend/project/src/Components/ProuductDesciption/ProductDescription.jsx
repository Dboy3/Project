import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByID,
  getSelectedProduct,
} from "../ProductComponents/ProductSlice";
import { useParams } from "react-router-dom";
import { AddToCart } from "../Cart/cartSlice";

const ProductDescription = () => {
  // Define the product object locally within the component
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();

  const product = useSelector(getSelectedProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByID(id));
  }, [dispatch]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    addToCart(product, quantity);
  };


  const addToCart = (product, quantity) => {
    const obj = { ...product, quantity, user: "6687f97a589de862e5725bb7" };
    dispatch(AddToCart(obj));
  };

  return (
    <>
      {product && (
        <div className="max-w-screen-xl mx-auto p-8 bg-white shadow-md rounded-lg">
          {showAlert && (
            <div className="fixed top-4 z-50 right-4 px-4 py-2 bg-green-500 text-white rounded shadow-lg">
              Item added to cart
            </div>
          )}

          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Product Image, Title, Description */}
            <div className="lg:w-1/2">
              <div className="flex items-center justify-center mb-8 lg:mb-0">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="lg:w-1/2 lg:pl-8">
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Price:
                </span>
                <span className="text-indigo-700 text-xl font-bold">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Rating:
                </span>
                <span className="text-yellow-500">
                  {product.rating.toFixed(2)} &#9733;
                </span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Brand:
                </span>
                <span className="text-gray-800">{product.brand}</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Weight:
                </span>
                <span className="text-gray-800">{product.weight}kg</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Warranty:
                </span>
                <span className="text-gray-800">
                  {product.warrantyInformation}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Shipping:
                </span>
                <span className="text-gray-800">
                  {product.shippingInformation}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Return Policy:
                </span>
                <span className="text-gray-800">{product.returnPolicy}</span>
              </div>

              {/* Quantity Dropdown and Add to Cart Button */}
              <div className="flex items-center mb-4">
                <span className="text-gray-700 text-lg font-semibold mr-2">
                  Quantity:
                </span>
                <select
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  {[...Array(product.stock).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="max-h-80 overflow-y-auto">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-300 mb-4 pb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 text-lg font-semibold mr-2">
                      Rating:
                    </span>
                    <span className="text-yellow-500">
                      {review.rating} &#9733;
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <div className="flex items-center">
                    <span className="text-gray-700 text-sm">
                      Reviewed by {review.reviewerName} on{" "}
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItemById,
  fetchAllCartItems,
  getCartItems,
  getTotalAmount,
  updateCartItemById,
} from "./cartSlice";
// import useCartLoaderData from "../customHook/useCartLoaderData";
import { useNavigate } from "react-router-dom";

const Cart = ({ showBtn }) => {
  // in future we will call this when the website starts
  // useCartLoaderData();

  const cart = useSelector(getCartItems);
  const totalAmount = useSelector(getTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchAllCartItems());
  // }, [dispatch]);

  const handleQuantityChange = (id, quantity) => {
    // dispatch(updateCartItemById({ id, quantity })).then(() => {
    //   dispatch(fetchAllCartItems());
    // });
    dispatch(updateCartItemById({ id, quantity }));
  };

  const handleRemove = (id) => {
    // dispatch(deleteCartItemById(id)).then(() => {
    //   dispatch(fetchAllCartItems());
    // });
    dispatch(deleteCartItemById(id));
  };

  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const handleCheckout = () => {
    if (totalAmount === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 min-h-screen rounded-xl m-3">
      {showAlert && (
        <div className="fixed top-4 z-50 right-4 px-4 py-2 bg-red-500 text-white rounded shadow-lg">
          Cart is empty.
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6 lg:max-h-[60vh] lg:overflow-y-auto p-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row items-center bg-white p-4 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full lg:w-1/4 h-48 object-cover rounded-lg mb-4 lg:mb-0"
            />
            <div className="lg:ml-4 flex-1 flex flex-col justify-between relative">
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-base">
                  ${item.price.toFixed(2)} each
                </p>
                <div className="flex items-center mb-2">
                  <label className="mr-2">Qty:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="p-2 border rounded-md"
                  >
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                      (quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <p className="text-gray-700 text-base">
                  Total: ${calculateItemTotal(item.price, item.quantity)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="absolute top-0 right-0 mt-2 mr-2 bg-red-100 text-red-500 p-1 rounded-full hover:bg-red-200"
              >
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xl font-semibold">
        Total Amount: ${totalAmount.toFixed(2)}
      </div>

      <button
        className={`mt-4 ${
          showBtn ? "" : "hidden"
        } px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition`}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;

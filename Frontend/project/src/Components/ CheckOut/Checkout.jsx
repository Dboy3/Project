import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  getTotalAmount,
  resetCartByUserId,
} from "../Cart/cartSlice";
import {
  fetchLoggedInUser,
  selectLoggedInUser,
  updateUserAddress,
} from "../User/userSlice";
import { insertOrder } from "../Order/orderSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const User = useSelector(selectLoggedInUser);
  const addresses = User?.addresses;

  const [showAlert, setShowAlert] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const totalAmount = useSelector(getTotalAmount);
  const cartItems = useSelector(getCartItems);

  const onSubmit = (data) => {
    dispatch(updateUserAddress(data));
    reset();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = "6687f97a589de862e5725bb7";
    dispatch(fetchLoggedInUser(userId));
  }, [dispatch]);

  const handleOrderNow = () => {
    if (paymentMode.length === 0 || selectedAddress.length === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    } else {
      const orderDetails = {
        totalAmount,
        selectedAddress,
        paymentMode,
        cartItems,
        user: User.id,
      };

      dispatch(insertOrder(orderDetails));
      dispatch(resetCartByUserId(User.id));

      // Navigate to order history page
      navigate("/orderhistory");
    }
  };

  const handleSelectedAddress = (e) => {
    const address = JSON.parse(e.target.value);
    setSelectedAddress(address);
  };

  return (
    <>
      {User && (
        <div className="flex flex-col lg:flex-row p-4 lg:p-8">
          {showAlert && (
            <div className="fixed top-4 z-50 right-4 px-4 py-2 bg-red-500 text-white rounded shadow-lg">
              Please select address and payment mode
            </div>
          )}
          <div className="flex-1 lg:mr-4">
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
              <label className="block mb-2">Add New Address</label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "name",
                    type: "text",
                    placeholder: "Name",
                    error: errors.name,
                  },
                  {
                    name: "email",
                    type: "email",
                    placeholder: "Email",
                    error: errors.email,
                  },
                  {
                    name: "contact",
                    type: "text",
                    placeholder: "Contact",
                    error: errors.contact,
                  },
                  {
                    name: "country",
                    type: "text",
                    placeholder: "Country",
                    error: errors.country,
                  },
                  {
                    name: "street",
                    type: "text",
                    placeholder: "Street",
                    error: errors.street,
                  },
                  {
                    name: "city",
                    type: "text",
                    placeholder: "City",
                    error: errors.city,
                  },
                  {
                    name: "region",
                    type: "text",
                    placeholder: "Region",
                    error: errors.region,
                  },
                  {
                    name: "pincode",
                    type: "text",
                    placeholder: "Pincode",
                    error: errors.pincode,
                  },
                ].map((field, index) => (
                  <div key={index}>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      {...register(field.name, {
                        required: `${field.placeholder} is required`,
                      })}
                      className="w-full p-2 border rounded"
                    />
                    {field.error && (
                      <span className="text-red-500">
                        {field.error.message}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="mt-2 p-2 bg-blue-500 text-white rounded"
              >
                Add Address
              </button>
            </form>

            <div className="mb-4">
              <label className="block mb-2">Select Address</label>
              <select
                value={selectedAddress}
                onChange={handleSelectedAddress}
                required={true}
                className="w-full p-2 border rounded"
              >
                <option value="" disabled>
                  Select an address
                </option>
                {addresses.map((address, index) => (
                  <option key={index} value={JSON.stringify(address)}>
                    {`${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.pincode}, ${address.country}`}
                  </option>
                ))}
              </select>
            </div>

            <h2 className="text-xl font-bold mb-4">Payment Mode</h2>
            <div className="mb-4">
              {["COD", "UPI", "Card"].map((mode, index) => (
                <label key={index} className="block mb-2">
                  <input
                    type="radio"
                    name="paymentMode"
                    value={mode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="mr-2"
                  />
                  {mode}
                </label>
              ))}
            </div>

            <button
              onClick={handleOrderNow}
              className="p-2 bg-green-500 text-white rounded"
            >
              Order Now
            </button>
          </div>
          <div className="w-full lg:w-1/3 lg:ml-4 mt-8 lg:mt-0">
            <Cart showBtn={false} />
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;

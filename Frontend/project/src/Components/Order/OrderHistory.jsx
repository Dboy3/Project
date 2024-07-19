import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrdersByUserId, getAllOrders } from "./orderSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getAllOrders);

  useEffect(() => {
    const userid = "6687f97a589de862e5725bb7";
    dispatch(fetchAllOrdersByUserId(userid));
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Order History</h1>
      {orders.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-6 shadow-lg bg-white"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">
                  Order ID: {order.id}
                </h2>
                <p className="text-gray-600">
                  Total Amount: ${order.totalAmount.toFixed(2)}
                </p>
                <p className="text-gray-600">
                  Payment Mode: {order.paymentMode}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>
                <p className="text-gray-600">{order.selectedAddress.name}</p>
                <p className="text-gray-600">{order.selectedAddress.street}</p>
                <p className="text-gray-600">
                  {order.selectedAddress.city}, {order.selectedAddress.region},{" "}
                  {order.selectedAddress.country} -{" "}
                  {order.selectedAddress.pincode}
                </p>
                <p className="text-gray-600">
                  Contact: {order.selectedAddress.contact}
                </p>
                <p className="text-gray-600">
                  Email: {order.selectedAddress.email}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Items</h3>
                <div className="max-h-40 overflow-y-auto">
                  {order.cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start sm:items-center space-x-4 mb-4"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md shadow-md"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-gray-600">
                          Price: ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Components/ToDo/todoSlice";
import productReducer from "../Components/ProductComponents/ProductSlice";
import cartReducer from "../Components/Cart/cartSlice";
import userReducer from "../Components/User/userSlice";
import orderReducer from "../Components/Order/orderSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    todo: todoReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
  },
});

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

// import components
import Home from "./Components/Home/Home.jsx";
import Trial from "./Components/ProductComponents/Trial.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ProductDescription from "./Components/ProuductDesciption/ProductDescription.jsx";
import Checkout from "./Components/ CheckOut/Checkout.jsx";
import PortfolioPage from "./Components/PortFolio/PortfolioPage.jsx";
import OrderHistory from "./Components/Order/OrderHistory.jsx";
import Template from "./app/Template.jsx";
import Login from "./Components/User/Login";
import SignUp from "./Components/User/Signup";

import { fetchAllCartItems } from "./Components/Cart/cartSlice.js";
import { selectLoggedInUser } from "./Components/User/userSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Template />}>
        <Route path="" element={<Home />} />
        <Route path="/shop" element={<Trial />} />
        <Route
          path="/cart"
          element={<Cart showBtn={true} />}
          // useLoaderData={useCartLoaderData}
        />
        <Route path="/products/:id" element={<ProductDescription />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </>
  )
);

function App() {
  const user = useSelector(selectLoggedInUser);

  const dispatch = useDispatch();
  const userid = "6687f97a589de862e5725bb7";

  useEffect(() => {
    if (user) {
      // dispatch()
    }
    dispatch(fetchAllCartItems(userid));
  }, [dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(getItemsByUserId(user.id));
  //     dispatch(fetchLoggedInUserAsync(user.id));
  //   }
  // }, [dispatch, user]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

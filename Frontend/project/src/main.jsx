import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider, useDispatch } from "react-redux";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import "./index.css";

// // import components
// import Home from "./Components/Home/Home.jsx";
// import Trial from "./Components/ProductComponents/Trial.jsx";
// import Cart from "./Components/Cart/Cart.jsx";
// import ProductDescription from "./Components/ProuductDesciption/ProductDescription.jsx";
// import Checkout from "./Components/ CheckOut/Checkout.jsx";
// import PortfolioPage from "./Components/PortFolio/PortfolioPage.jsx";
// // import useCartLoaderData from "./Components/customHook/useCartLoaderData.jsx";
// import OrderHistory from "./Components/Order/OrderHistory.jsx";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="/shop" element={<Trial />} />
//       <Route
//         path="/cart"
//         element={<Cart showBtn={true} />}
//         // useLoaderData={useCartLoaderData}
//       />
//       <Route path="/products/:id" element={<ProductDescription />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/portfolio" element={<PortfolioPage />} />
//       <Route path="/orderhistory" element={<OrderHistory />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </Provider>
  </React.StrictMode>
);

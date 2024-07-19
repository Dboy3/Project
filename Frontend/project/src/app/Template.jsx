import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom";
import { fetchAllCartItems } from "../Components/Cart/cartSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const userid = "6687f97a589de862e5725bb7";

  useEffect(() => {
    dispatch(fetchAllCartItems(userid));
  }, [dispatch]);

  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default App;

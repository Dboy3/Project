// hooks/useCartLoaderData.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";// Adjust path as per your project structure
import { fetchAllCartItems } from "../Cart/cartSlice";

const useCartLoaderData = () => {
  const dispatch = useDispatch();
  const userid = "6687f97a589de862e5725bb7";

  useEffect(() => {
    dispatch(fetchAllCartItems(userid));
  }, [dispatch]);

};

export default useCartLoaderData;

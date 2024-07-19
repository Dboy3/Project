import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { selectLoggedInUser } from "../User/userSlice";

function Navbar({ children }) {
  // const User = useSelector(selectLoggedInUser);
  const User = {};
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (User) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50 block">
        <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800"
          >
            Ecommerce
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl p-1 cursor-pointer md:hidden hover:text-blue-600 rounded-md"
          >
            &#8801;
          </div>


          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >

            <li className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-indigo-700" : "text-gray-700"
                  } text-gray-800 hover:text-gray-400 duration-500`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-indigo-700" : "text-gray-700"
                  } text-gray-800 hover:text-gray-400 duration-500`
                }
              >
                Shop
              </NavLink>
            </li>

            {User && (
              <>
                <li className="md:ml-8 text-xl md:my-0 my-7">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-indigo-700" : "text-gray-700"
                      } text-gray-800 hover:text-gray-400 duration-500`
                    }
                  >
                    Cart
                  </NavLink>
                </li>

                <li className="md:ml-8 text-xl md:my-0 my-7">
                  <NavLink
                    to="/orderhistory"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-indigo-700" : "text-gray-700"
                      } text-gray-800 hover:text-gray-400 duration-500`
                    }
                  >
                    Orders
                  </NavLink>
                </li>
              </>
            )}
          <div className="block pr-4 pl-3 duration-200 ">
            <button
              onClick={handleLoginLogout}
              className="text-sm md:text-base bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:px-6 rounded-full shadow-md focus:outline-none transition duration-300"
            >
              {User ? "Logout" : "Login"}
            </button>
          </div>
          </ul>


        </div>
      </div>

      <div class="container mt-20 mx-auto overflow-y-auto p-1">{children}</div>
    </>
  );
}

export default Navbar;

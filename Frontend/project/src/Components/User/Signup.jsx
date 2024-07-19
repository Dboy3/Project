import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addUserAsync } from "../User/userSlice"; // Import your addUser action

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // await dispatch(addUserAsync(data)); // Assume this action handles user creation
    // navigate("/login");
    console.log("btn clicked ", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Create your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm space-y-6">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: "Email is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: "Password is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              Shipping Address
            </h3>
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="sr-only">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                {...register("contact", { required: "Contact is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Contact Number"
              />
              {errors.contact && (
                <span className="text-red-500 text-sm">
                  {errors.contact.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                {...register("country", { required: "Country is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Country"
              />
              {errors.country && (
                <span className="text-red-500 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="street" className="sr-only">
                Street
              </label>
              <input
                id="street"
                name="street"
                type="text"
                {...register("street", { required: "Street is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Street Address"
              />
              {errors.street && (
                <span className="text-red-500 text-sm">
                  {errors.street.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                {...register("city", { required: "City is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="City"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="region" className="sr-only">
                Region
              </label>
              <input
                id="region"
                name="region"
                type="text"
                {...register("region", { required: "Region is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Region"
              />
              {errors.region && (
                <span className="text-red-500 text-sm">
                  {errors.region.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="pincode" className="sr-only">
                Pincode
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                {...register("pincode", { required: "Pincode is required" })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Pincode"
              />
              {errors.pincode && (
                <span className="text-red-500 text-sm">
                  {errors.pincode.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

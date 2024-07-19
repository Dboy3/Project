import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProductAsync,
  getAllProducts,
  productSlice,
} from "./ProductSlice";
import { Link, NavLink } from "react-router-dom";

const itemsPerPage = 8;

//
// --------------------------------------------- Product Card ---------------------------------------------
const ProductCard = ({ product }) => {
  const { thumbnail, title, price, rating } = product;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const onAddToCart = () => {
    console.log("add to cart pressed");
  };

  return (
    <div
      key={product.id}
      className="group relative shadow bg-white rounded-md overflow-hidden"
    >
      <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img src={thumbnail} alt={title} className="object-cover w-full" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800">
          <div href={thumbnail} className="hover:underline">
            {title}
          </div>
        </h3>
        <p className="mt-2 text-sm text-gray-500 flex">{renderStars(rating)}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-medium text-gray-900">{price} ₹</p>

          {/* changes here */}
          <button
            onClick={onAddToCart}
            className="text-sm text-blue-500 hover:underline"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
// -------------------------------------------------------------------------------------------------------

// --------------------------------------------- Product List  ---------------------------------------------


const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductAsync());
  }, [dispatch]);

  const products = useSelector(getAllProducts);

  // some logic
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = products.slice(startIndex, startIndex + itemsPerPage);
  // const selectedItems = products;

  // Logic ends here

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {/* idhar selected items se print karvana  */}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {selectedItems.map((product) => (
          <NavLink key={product.id} to={`/products/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </NavLink>
        ))}
      </div>

      {/* Pagination logic  */}
      <div className="flex justify-center mt-4 my-4">
        <button
          className="text-indigo-600 font-semibold"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`mx-1 px-2 ${
              currentPage === index + 1 ? "font-bold" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="text-indigo-600 font-semibold"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
// -------------------------------------------------------------------------------------------------------

export default ProductList;

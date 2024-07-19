import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsBySort } from "./ProductSlice";

const sortby = [
  { name: "Best Rating", order: "desc", sort: "rating", checked: false },
  { name: "Price: Low to High", order: "asc", sort: "price", checked: false },
];

const FilterSidebar = ({isOpen}) => {

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState(sortby);
  const dispatch = useDispatch();


  //------------------------------------------- handle filter ------------------------------------------

  const handleFilter = ( cat , e ) => {
    console.log(cat);
  };

  const handleSort = useCallback(
    (option, e) => {
      const newSortOptions = sortOptions.map((so) =>
        so.name === option.name ? { ...so, checked: e.target.checked } : so
      );

      setSortOptions(newSortOptions);
      console.log(newSortOptions);
    },
    [sortOptions]
  );

  
  // useEffect(() => {
  //   dispatch(fetchProductsBySort(sortOptions));
  // }, [sortOptions]);

  
  // -------------------------------------------------------------------------------------------------------

  // ------------------------------------------- hardcoded filter ------------------------------------------
  const cats = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  const brands = ["brand1", "brand2", "brand3", "brand4"];

  // -------------------------------------------------------------------------------------------------------

  return (
    <div
      className={`bg-gray-100 p-4  lg:py-20 space-y-4 lg:w-60 ${
        isOpen ? "block" : "hidden"
      } lg:block`}
    >
      {/* Category Filter */}
      <div>
        <h3
          className="font-bold cursor-pointer flex justify-between items-center bg-white p-2 rounded"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          Category
          <span>{isCategoryOpen ? "-" : "+"}</span>
        </h3>

        <div
          className={`mt-2 p-1 space-y-2 transition-all duration-600 overflow-hidden ${
            isCategoryOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {cats.map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                className="mr-2"
                defaultValue={cat}
                defaultChecked={cat.checked}
                onChange={(e) => handleFilter(cat, e)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3
          className="font-bold cursor-pointer flex justify-between items-center bg-white p-2 rounded"
          onClick={() => setIsSortByOpen(!isSortByOpen)}
        >
          SortBy
          <span>{isSortByOpen ? "-" : "+"}</span>
        </h3>

        <div
          className={`mt-2 p-1 space-y-2 transition-all duration-600 overflow-hidden ${
            isSortByOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {sortOptions.map((option) => (
            <label key={option.name} className="block">
              <input
                type="checkbox"
                className="mr-2"
                defaultChecked={option.checked}
                onChange={(e) => handleSort(option, e)}
              />
              {option.name}
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3
          className="font-bold cursor-pointer flex justify-between items-center bg-white p-2 rounded"
          onClick={() => setIsBrandOpen(!isBrandOpen)}
        >
          Brand
          <span>{isBrandOpen ? "-" : "+"}</span>
        </h3>
        <div
          className={`mt-2 p-1 space-y-2 transition-all duration-300 overflow-hidden ${
            isBrandOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {brands.map((brand) => (
            <label key={brand} className="block">
              <input
                type="checkbox"
                className="mr-2"
                defaultValue={brand}
                defaultChecked={brand.checked}
                onChange={(e) => handleFilter(brand, e)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

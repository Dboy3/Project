import React, { useState } from "react";

// const sortby = [
//   { name: "Best Rating", order: "desc", sort: "rating", checked: false },
//   { name: "Price: Low to High", order: "asc", sort: "price", checked: false },
// ];

// const cats = [
//   {
//     value: "Chair",
//     label: "Chair",
//     checked: false,
//   },
//   {
//     value: "Table",
//     label: "Table",
//     checked: false,
//   },
//   {
//     value: "Sofa",
//     label: "Sofa",
//     checked: false,
//   },
//   {
//     value: "Desk",
//     label: "Desk",
//     checked: false,
//   },
//   {
//     value: "Bed",
//     label: "Bed",
//     checked: false,
//   },
// ];

const initialSortBy = [
  { name: "Best Rating", order: "desc", sort: "rating", checked: false },
  { name: "Price: Low to High", order: "asc", sort: "price", checked: false },
  { name: "Price: High to Low", order: "desc", sort: "price", checked: false },
];

const initialCategory = [
  { value: "Chair", label: "Chair", checked: false },
  { value: "Table", label: "Table", checked: false },
  { value: "Sofa", label: "Sofa", checked: false },
  { value: "Desk", label: "Desk", checked: false },
  { value: "Bed", label: "Bed", checked: false },
];

const initialBrand = [
  { value: "apple", label: "Apple", checked: false },
  { value: "samsung", label: "Samsung", checked: false },
  { value: "oppo", label: "Oppo", checked: false },
  { value: "redmi", label: "Redmi", checked: false },
];

const FilterSidebar = ({ isOpen }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);

  // filter
  // const [sortFilter, setSortFilter] = useState(sortby);
  // const [catFilter, setCatFilter] = useState(cats);
  // const [mainFilter, setMainFilter] = useState({});

  const [sortby, setSortby] = useState(initialSortBy);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const [filter, setFilter] = useState({
    category: [],
    brand: [],
    sortby: [],
    order: [],
  });

  // catfilter handler
  // const handleFilter = (option, e) => {
  //   const checked = e.target.checked;
  //   const value = option.value;
  //   console.log(value, checked);

  //   const newCategories = catFilter.map((cat) => {
  //     return cat.value === value ? { ...cat, checked: checked } : cat;
  //   });

  //   setCatFilter(newCategories);
  // };

  // sortfilter handler
  const handleSort = (option, e) => {
    const checked = e.target.checked;
    const name = option.name;
    console.log(name, checked);

    const newSort = sortFilter.map((sort) => {
      return sort.name === name ? { ...sort, checked: checked } : sort;
    });

    setSortFilter(newSort);
  };

  const handleFilter = (option, e) => {
    const { checked } = e.target;
    const { name, value, order, sort } = option;

    if (sort) {
      // Update the sortby array
      setSortby((prevSortby) =>
        prevSortby.map((sortOption) =>
          sortOption.name === name ? { ...sortOption, checked } : sortOption
        )
      );

      setFilter((prevFilter) => {
        const updatedSortby = checked
          ? [...prevFilter.sortby, sort]
          : prevFilter.sortby.filter((item) => item !== sort);
        const updatedOrder = checked
          ? [...prevFilter.order, order]
          : prevFilter.order.filter((item) => item !== order);
        return { ...prevFilter, sortby: updatedSortby, order: updatedOrder };
      });
    }

    if (category.some((cat) => cat.value === value)) {
      // Update the category array
      setCategory((prevCategory) =>
        prevCategory.map((cat) =>
          cat.value === value ? { ...cat, checked } : cat
        )
      );

      setFilter((prevFilter) => {
        const updatedCategory = checked
          ? [...prevFilter.category, value]
          : prevFilter.category.filter((item) => item !== value);
        return { ...prevFilter, category: updatedCategory };
      });
    }

    if (brand.some((br) => br.value === value)) {
      // Update the brand array
      setBrand((prevBrand) =>
        prevBrand.map((br) => (br.value === value ? { ...br, checked } : br))
      );

      setFilter((prevFilter) => {
        const updatedBrand = checked
          ? [...prevFilter.brand, value]
          : prevFilter.brand.filter((item) => item !== value);
        return { ...prevFilter, brand: updatedBrand };
      });
    }

    console.log(filter);
  };

  return (
    <div
      className={`bg-gray-100 p-4 lg:py-20 space-y-4 lg:w-60 ${
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
          {category.map((cat) => (
            <label key={cat.value} className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={category.checked}
                onChange={(e) => handleFilter(cat, e)}
              />
              {cat.label}
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
          {sortby.map((option) => (
            <label key={option.name} className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={sortby.checked}
                // changes on sorthandle
                onChange={(e) => handleFilter(option, e)}
              />
              {option.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

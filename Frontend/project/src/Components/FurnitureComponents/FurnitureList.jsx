import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const itemsPerPage = 8;

const products = [
  {
    id: 1,
    title: "Modern Table",
    description:
      "A sleek and modern table that complements any contemporary space.",
    thumbnail:
      "https://www.ikea.com/in/en/images/products/trotten-desk-beige-anthracite__1020747_pe831975_s5.jpg?f=xl",
    price: 1200,
    discount: 0,
    rating: 4.5,
    category: "Table",
    usageDuration: "5 years",
    availableDurationInMonths: 12,
  },
  {
    id: 2,
    title: "Comfortable Chair",
    description:
      "An exceptionally comfortable chair designed for long hours of seating.",
    thumbnail:
      "https://static1.industrybuying.com/products/office-supplies/office-furniture/office-chairs/OFF.OFF.220919626_1692332634767.webp",
    price: 800,
    discount: 10,
    rating: 4.2,
    category: "Chair",
    usageDuration: "3 years",
    availableDurationInMonths: 6,
  },
  {
    id: 3,
    title: "Elegant Sofa",
    description:
      "An elegant sofa that adds sophistication and comfort to your living room.",
    thumbnail:
      "https://www.ulcdn.net/images/products/834745/original/FNSF51BRTLA0_-_main_1.jpg?1689677722",
    price: 2500,
    discount: 5,
    rating: 4.8,
    category: "Sofa",
    usageDuration: "7 years",
    availableDurationInMonths: 9,
  },
  {
    id: 4,
    title: "Stylish Bed",
    description:
      "A stylish and cozy bed that enhances your bedroom with its modern design.",
    thumbnail: "https://m.media-amazon.com/images/I/61LUdZj+tpL._SX679_.jpg",
    price: 1800,
    discount: 15,
    rating: 4.0,
    category: "Bed",
    usageDuration: "4 years",
    availableDurationInMonths: 8,
  },
  {
    id: 5,
    title: "Classic Desk",
    description:
      "A classic desk that combines functionality with timeless elegance.",
    thumbnail:
      "https://www.lakkadhaara.com/cdn/shop/products/ZeusStudy.png?v=1670163793&width=1426",
    price: 1500,
    discount: 8,
    rating: 4.7,
    category: "Desk",
    usageDuration: "2 years",
    availableDurationInMonths: 10,
  },
  {
    id: 6,
    title: "Comfortable Table",
    description:
      "A comfortable table designed for both work and dining purposes.",
    thumbnail:
      "https://m.media-amazon.com/images/I/51tionZCj2L._SX300_SY300_QL70_FMwebp_.jpg",
    price: 1300,
    discount: 12,
    rating: 4.3,
    category: "Table",
    usageDuration: "6 years",
    availableDurationInMonths: 11,
  },
  {
    id: 7,
    title: "Elegant Chair",
    description:
      "An elegantly designed chair that blends style with ergonomic comfort.",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6THZNlRo9COf9T2C8rINDlefmPijoC146whCute8BSnMLsRDp-lIOrj4h-Ph4ko7T-Y_Ncj9Q-EpeP-gROHLPe1izObFf",
    price: 900,
    discount: 3,
    rating: 4.9,
    category: "Chair",
    usageDuration: "5 years",
    availableDurationInMonths: 7,
  },
  {
    id: 8,
    title: "Modern Sofa",
    description:
      "A modern sofa that offers luxurious comfort and contemporary aesthetics.",
    thumbnail:
      "https://www.ikea.com/in/en/images/products/landskrona-3-seat-sofa-gunnared-light-green-wood__0602122_pe680191_s5.jpg?f=xl",
    price: 2700,
    discount: 6,
    rating: 4.6,
    category: "Sofa",
    usageDuration: "8 years",
    availableDurationInMonths: 9,
  },
  {
    id: 9,
    title: "Stylish Bed",
    description:
      "A stylish bed that combines functionality with a touch of sophistication.",
    thumbnail:
      "https://cms.interiorcompany.com/wp-content/uploads/2023/11/unique-and-stylish-wood-cannonball-bed-design.png",
    price: 2000,
    discount: 4,
    rating: 4.4,
    category: "Bed",
    usageDuration: "3 years",
    availableDurationInMonths: 5,
  },
  {
    id: 10,
    title: "Classic Desk",
    description:
      "A classic desk that provides a perfect blend of traditional charm and practicality.",
    thumbnail:
      "https://www.ikea.com/in/en/images/products/arkelstorp-desk-black__0735967_pe740301_s5.jpg?f=xl",
    price: 1600,
    discount: 18,
    rating: 4.2,
    category: "Desk",
    usageDuration: "7 years",
    availableDurationInMonths: 12,
  },
  {
    id: 11,
    title: "Comfortable Table",
    description:
      "A comfortable and versatile table suitable for various living spaces.",
    thumbnail:
      "https://www.ikea.com/in/en/images/products/mittzon-desk-white__1206032_pe907353_s5.jpg?f=xl",
    price: 1400,
    discount: 9,
    rating: 4.8,
    category: "Table",
    usageDuration: "4 years",
    availableDurationInMonths: 6,
  },
  {
    id: 12,
    title: "Elegant Chair",
    description:
      "An elegant chair crafted with attention to detail for a refined seating experience.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRn4d1zWADEVyPpExwEWZGo8KMpnndFdvVlxhPeIqnEBw1p1lzSUBrwoPy-CJistDWHk1oUzpwCfaKbfDITZqodq73UKH1e9BHnCk8HWtY8QdjyEcIGf2zgNQ",
    price: 950,
    discount: 5,
    rating: 4.3,
    category: "Chair",
    usageDuration: "6 years",
    availableDurationInMonths: 10,
  },
  {
    id: 13,
    title: "Modern Sofa",
    description:
      "A modern sofa designed to elevate your home decor with its contemporary style.",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsPpBGuVlNVtxB99QZh2vBtivITCD_7nHpyRB85UQQ72m_s-cLRjHcIUE4vFBM4BZaDE8EbsmzebnrmHQr7z8IEJMXowTbrWlO-pzRhp7TqWvrIUJKUvJo4KURZJGBXNjV9F6dk4Q&usqp=CAc",
    price: 2600,
    discount: 7,
    rating: 4.9,
    category: "Sofa",
    usageDuration: "9 years",
    availableDurationInMonths: 11,
  },
  {
    id: 14,
    title: "Stylish Bed",
    description:
      "A stylish and comfortable bed that enhances the ambiance of your bedroom.",
    thumbnail:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/382822369/GJ/GP/BY/97520105/stylish-bed.jpg",
    price: 2200,
    discount: 2,
    rating: 4.6,
    category: "Bed",
    usageDuration: "5 years",
    availableDurationInMonths: 8,
  },
  {
    id: 15,
    title: "Classic Desk",
    description:
      "A classic desk that offers a timeless appeal and functional workspace.",
    thumbnail:
      "https://www.ikea.com/in/en/images/products/idanaes-desk-brown__1159450_pe888496_s5.jpg?f=xl",
    price: 1700,
    discount: 13,
    rating: 4.1,
    category: "Desk",
    usageDuration: "8 years",
    availableDurationInMonths: 9,
  },
];

const ProductCard = ({ product }) => {

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
    <div className="group relative shadow-md bg-gray-200 rounded-md overflow-hidden h-80">
      <div className="aspect-w-3 h-52 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800">
          <a href={product.thumbnail} className="hover:underline">
            {product.title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-gray-500 flex items-center">
          {renderStars(product.rating)}
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-medium text-gray-900">{product.price} ₹</p>
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

const FurnitureList = () => {
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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedItems.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      <div className="flex justify-center mt-4">
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

export default FurnitureList;

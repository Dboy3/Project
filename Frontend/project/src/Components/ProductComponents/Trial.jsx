import React from "react";
import FilterSidebar from "./FilterSidebar";
import ProductList from "./ProductList";
import { useState } from "react";

function Trial() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="flex flex-col lg:flex-row ">

      <button
        className="lg:hidden bg-blue-500 text-white p-2 m-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <FilterSidebar isOpen={isSidebarOpen} />

      <div className="flex-1">
        <ProductList />
      </div>

    </div>
  );
}

export default Trial;

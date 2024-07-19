import React from "react";
import FILTERsidebar from "./FILTERsidebar";
import FurnitureList from "./FurnitureList";
import { useState } from "react";

function ListPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row ">
      <button
        className="lg:hidden bg-blue-500 text-white p-2 m-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <FILTERsidebar isOpen={isSidebarOpen} />

      <div className="flex-1">
        <FurnitureList />
      </div>
    </div>
  );
}

export default ListPage;

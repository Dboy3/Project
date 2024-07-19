import React from "react";
import Navbar from "../Components/Navbar/Navbar";
// import FurnitureList from "../Components/FurnitureComponents/FurnitureList";
import ListPage from "../Components/FurnitureComponents/ListPage";

function FurnitureCompo() {
  return (
    <Navbar>
      <ListPage></ListPage>
    </Navbar>
  );
}

export default FurnitureCompo;

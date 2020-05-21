import React from "react";
import CategoryFilter from "../components/categoryFilter";

const categoryContainer = ({ categories = [] }) => {
  return (
    <div>
      {categories.map(({ id, title }) => {
        return <CategoryFilter key={id} id={id} title={title} />;
      })}
    </div>
  );
};

export default categoryContainer;

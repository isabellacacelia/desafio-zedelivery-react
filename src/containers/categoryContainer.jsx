import React from "react";
import CategoryFilter from "../components/categoryFilter";

const categoryContainer = ({ categories = [], onCategoryClick }) => {
  return (
    <div>
      {categories.map(({ id, title }) => {
        return (
          <CategoryFilter
            key={id}
            id={id}
            title={title}
            onCategoryClick={onCategoryClick}
          />
        );
      })}
    </div>
  );
};

export default categoryContainer;

import React from "react";
import CardProduct from "../components/cardProduct";

const ProductsContainer = ({ products }) => {
  return (
    <div>
      {products.map(({ id, title, imgProduct, price }) => {
        return (
          <CardProduct
            id={id}
            title={title}
            imgProduct={imgProduct}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ProductsContainer;

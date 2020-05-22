import React from "react";
import CardProduct from "../components/cardProduct";
import { toProductComponent } from "../helpers/data/productConverter";

const ProductsContainer = ({ products = [], onSearchEnter }) => {
  return (
    <div>
      {products
        .map((p) => toProductComponent(p))
        .map(({ id, title, imgProduct, price }) => {
          return (
            <CardProduct
              id={id}
              key={id}
              title={title}
              imgProduct={imgProduct}
              price={price}
              onSearchEnter={onSearchEnter}
            />
          );
        })}
    </div>
  );
};

export default ProductsContainer;

import React from "react";
import CardProduct from "../components/cardProduct";

const productsContainer = (props) => {
  return (
    <div>
      <h2>Petiscos</h2>
      <CardProduct
        imgProduct="https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009414_91d2e756-8b3b-4363-ba91-2c8c8b82eeef.jpg"
        title="Sukita 350ml"
        price={1.99}
      ></CardProduct>
      <CardProduct
        imgProduct="https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009414_91d2e756-8b3b-4363-ba91-2c8c8b82eeef.jpg"
        title="Sukita 350ml"
        price={1.99}
      ></CardProduct>
      <CardProduct
        imgProduct="https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009414_91d2e756-8b3b-4363-ba91-2c8c8b82eeef.jpg"
        title="Sukita 350ml"
        price={1.99}
      ></CardProduct>
      <CardProduct
        imgProduct="https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009414_91d2e756-8b3b-4363-ba91-2c8c8b82eeef.jpg"
        title="Sukita 350ml"
        price={1.99}
      ></CardProduct>
      <CardProduct
        imgProduct="https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009414_91d2e756-8b3b-4363-ba91-2c8c8b82eeef.jpg"
        title="Sukita 350ml"
        price={1.99}
      ></CardProduct>
    </div>
  );
};

export default productsContainer;

import React from "react";
import CategoryFilter from "../components/categoryFilter";
import CardProduct from "../components/cardProduct";
import Styled from "styled-components";

const StyleCardContainer = Styled.div`
    width: 1200px;
    margin: auto;
      @media (max-width: 500px) {
      width: 320px;
      text-align: center;
  }
`;

const Products = (props) => {
  return (
    <div>
      <StyleCardContainer>
        <CategoryFilter title="Cervejas"></CategoryFilter>
        <CategoryFilter title="Cervejas"></CategoryFilter>
        <CategoryFilter title="Cervejas"></CategoryFilter>
        <CategoryFilter title="Cervejas"></CategoryFilter>
        <CategoryFilter title="Cervejas"></CategoryFilter>
        <CategoryFilter title="Cervejas"></CategoryFilter>
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
      </StyleCardContainer>
    </div>
  );
};

export default Products;

import React from "react";
import Styled from "styled-components";
import Header from "../components/header";
import CategoryContainer from "../containers/categoryContainer";
import ProductsContainer from "../containers/productsContainer";
import Footer from "../components/footer";
import { useQuery } from "@apollo/react-hooks";
import allCategory from "../graphql/queries/allCategory";

const ProductsMock = [
  {
    id: 0,
    imgProduct:
      "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009405_43a71fd3-7ba5-4e26-b84c-e3088e663637.jpg",
    price: 0.01,
    title: "Skol 269ml - Unidade",
  },
  {
    id: 1,
    imgProduct:
      "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/products/8503.png",
    price: 31.09,
    title: "Skol 269ml - Pack com 15 Unidades",
  },
  {
    id: 2,
    imgProduct:
      "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008953_4dbfb5ac-3c8b-4a1d-ad5c-c3ab66c98554.jpg",
    price: 4.57,
    title: "Pastel",
  },
  {
    id: 3,
    imgProduct:
      "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008945_0c8915c4-f78e-4c00-927d-6cd045dd1203.jpg",
    price: 5.79,
    title: "Alexandre",
  },
  {
    id: 4,
    imgProduct:
      "https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008942_0078bead-7ee6-44ea-b875-a758010383e4.jpg",
    price: 2.28,
    title: "Isabella",
  },
];

const StyleCardContainer = Styled.div`
    width: 1200px;
    margin: auto;
      @media (max-width: 500px) {
      width: 320px;
      text-align: center;
  }
`;

const Products = (props) => {
  const { loading, error, data } = useQuery(allCategory);

  return (
    <div>
      <Header />
      <StyleCardContainer>
        <CategoryContainer categories={data?.allCategory} />
        <ProductsContainer products={ProductsMock} />
      </StyleCardContainer>
      <Footer />
    </div>
  );
};

export default Products;

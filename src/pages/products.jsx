import React from "react";
import Header from "../components/header";
import CategoryContainer from "../containers/categoryContainer";
import ProductsContainer from "../containers/productsContainer";
import Styled from "styled-components";
import Footer from "../components/footer";

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
      <Header />
      <StyleCardContainer>
        <CategoryContainer />
        <ProductsContainer />
      </StyleCardContainer>
      <Footer />
    </div>
  );
};

export default Products;

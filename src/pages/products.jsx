import React from "react";
import Styled from "styled-components";
import Header from "../components/header";
import CategoryContainer from "../containers/categoryContainer";
import ProductsContainer from "../containers/productsContainer";
import Footer from "../components/footer";
import { useQuery } from "@apollo/react-hooks";
import allCategory from "../graphql/queries/allCategory";
import allProducts from "../graphql/queries/allProducts";

const StyleCardContainer = Styled.div`
    width: 1200px;
    margin: auto;
      @media (max-width: 500px) {
      width: 320px;
      text-align: center;
  }
`;

const Products = (props) => {
  const idProduct = "532",
    categoryId = null,
    search = "";

  const { data: categories, loading, error } = useQuery(allCategory);
  const {
    loading: loadingProducts,
    error: errorProducts,
    data: products,
  } = useQuery(allProducts, {
    variables: {
      id: { idProduct },
      categoryId: { categoryId },
      search: { search },
    },
  });

  if (loadingProducts)
    return <div> Aguarde enquanto carregamos nossos produtos! </div>;
  if (errorProducts) {
    console.log("Isabella:", errorProducts);
    return (
      <div>
        <span> Algo deu errado! Tente novamente mais tarde </span>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <StyleCardContainer>
        <CategoryContainer categories={categories?.allCategory} />
        <ProductsContainer products={products?.allProducts} />
      </StyleCardContainer>
      <Footer />
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import Styled from "styled-components";
import Header from "../components/header";
import CategoryContainer from "../containers/categoryContainer";
import ProductsContainer from "../containers/productsContainer";
import InputSearch from "../components/inputSearch";
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

const Loading = Styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`;

const Products = (props) => {
  const productId = "532";
  const [categoryId, setCategoryId] = useState(null);
  const [search, setSearch] = useState(undefined);

  const {
    data: categoriesData,
    loading: loadingCategories,
    error: errorCategories,
  } = useQuery(allCategory);
  const {
    loading: loadingProducts,
    error: errorProducts,
    data: productsData,
  } = useQuery(allProducts, {
    variables: {
      id: productId,
      categoryId,
      search,
    },
  });

  if (loadingProducts)
    return <Loading>Aguarde enquanto carregamos nossos produtos! </Loading>;
  if (errorProducts) {
    console.log("Isabella:", errorProducts);
    return <Loading>Algo deu errado! Tente novamente mais tarde</Loading>;
  }

  const categories = categoriesData?.allCategory;
  const products = productsData?.poc?.products;

  return (
    <div>
      <Header />
      <StyleCardContainer>
        <InputSearch search={search} onSearchEnter={setSearch} />
        <CategoryContainer
          categories={categories}
          onCategoryClick={setCategoryId}
        />
        <ProductsContainer products={products} />
      </StyleCardContainer>
      <Footer />
    </div>
  );
};

export default Products;

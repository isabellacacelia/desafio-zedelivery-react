import React from "react";
import Styled from "styled-components";

const StyleCardProduct = Styled.div`
    display: inline-block;
    height: auto;
    width: 188px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
    margin: 10px;
`;

const StyleCardProductParagraph = Styled.p`
    margin: 0;
    padding: 1em;
    color: #ddd;
`;

const StyleCardProductPrice = Styled.p`
    padding: 0 0 1em 1em;
    font-weight: bold;
`;

const StyleCardProductImage = Styled.img`
    width: 60%;
    display: flex;
    margin: auto
`;

const CardProduct = ({ title = "", price = "", imgProduct = "" }) => {
  return (
    <StyleCardProduct>
      <StyleCardProductImage src={imgProduct} alt={title} />
      <StyleCardProductParagraph>{title}</StyleCardProductParagraph>
      <StyleCardProductPrice>R$ {price}</StyleCardProductPrice>
    </StyleCardProduct>
  );
};

export default CardProduct;

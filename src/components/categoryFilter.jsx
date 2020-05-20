import React from "react";
import Styled from "styled-components";

const StyleCategoryFilter = Styled.div`
    display: inline-block;
    width: 188px;
    border-radius: 8px;
    border: solid 1px #ddd;
    margin: 25px 5px;    
    :hover {
        border: solid 1px rgb(255, 197, 0);
    }
`;

const StyleCategoryFilterParagraph = Styled.p`
    text-align: center;
    margin: 0;
    padding: 0.8em;
    color: #333;
`;

const CategoryFilter = ({ title = "" }) => {
  return (
    <StyleCategoryFilter>
      <StyleCategoryFilterParagraph>{title}</StyleCategoryFilterParagraph>
    </StyleCategoryFilter>
  );
};

export default CategoryFilter;

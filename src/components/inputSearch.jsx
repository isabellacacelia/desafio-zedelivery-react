import React from "react";
import Styled from "styled-components";

const StyleInputSearch = Styled.input`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    box-sizing: border-box;
    color: #333;
    background-color: #ffffff;
    font-size: 16px;
    border: 1px solid #ddd;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    @media (max-width: 350px) {
        width: 80%;
        margin: auto;
        text-align: center;
    }
`;

const InputSearch = ({
  search = "Pesquise sua bebiba favorita",
  onSearchEnter,
}) => {
  return (
    <StyleInputSearch
      placeholder={search}
      onKeyUp={(event) => {
        if (event.keyCode === 13) {
          onSearchEnter(event.target.value);
        }
      }}
    />
  );
};

export default InputSearch;

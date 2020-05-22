import React from "react";
import Styled from "styled-components";

const StyleInputSearch = Styled.input`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    box-sizing: border-box;
    color: #ddd;
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

const InputSearch = ({ title = "", id = "", onSearchEnter }) => {
  return (
    <StyleInputSearch
      placeholder="Pesquise sua bebiba favorita"
      onKeyUp={(event) => onSearchEnter(id)}
      value={id}
    />
  );
};

export default InputSearch;

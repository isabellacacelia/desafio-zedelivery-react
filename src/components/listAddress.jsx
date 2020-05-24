import React from "react";
import Styled from "styled-components";

const StyleListAddress = Styled.div`
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-sizing: border-box;
    color: #333;
    background-color: #ffffff;
    font-size: 14px;
    border: 1px solid #ddd;
    padding-left: 20px;
    padding-right: 20px;
    p:nth-child(1) {
        margin-bottom: 2px;
    }
    p:nth-child(2) {
        margin-top: 4px;
        color: #999
    }
    hr {
      border: solid 1px #ddd
    }
`;

const ListAddress = ({ longAddress = "", city = "", state = "" }) => {
  return (
    <StyleListAddress>
      <p>
        {city}, {state}
      </p>
      <p>{longAddress}</p>
    </StyleListAddress>
  );
};

export default ListAddress;

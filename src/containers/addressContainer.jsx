import React from "react";
import ListAddress from "../components/listAddress";
import Styled from "styled-components";

const StyleLink = Styled.a`
  text-decoration: none;
`;

const AddressContainer = ({ address = [] }) => {
  return (
    <div>
      {address.map(({ longAddress, city, state }) => {
        return (
          <StyleLink>
            <ListAddress longAddress={longAddress} city={city} state={state} />
          </StyleLink>
        );
      })}
    </div>
  );
};

export default AddressContainer;

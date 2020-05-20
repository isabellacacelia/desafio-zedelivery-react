import React from "react";
import Styled from "styled-components";
import { WhiteLogo } from "./elements";

const StyleHeader = Styled.header`
    background-color: #333;
    padding: 1.2em;
`;

const Header = () => {
  return (
    <StyleHeader>
      <img
        width="121px"
        height="40px"
        marginLeft="3em"
        alt="Zé Delivery"
        src={WhiteLogo}
      />
    </StyleHeader>
  );
};

export default Header;

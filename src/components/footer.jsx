import React from "react";
import Styled from "styled-components";

const StyleFooter = Styled.footer`
    background-color: #333;
    padding: 1.2em;
    text-align: center;
    font-size: 0.8em;
    color: #ccc;
    a {
        color: #ddd
    }
`;

const Footer = () => {
  return (
    <StyleFooter>
      Desenvolvido por &nbsp;
      <a target="_blank" href="https://www.linkedin.com/in/isabellacacelia/">
        Isabella Cacélia Vicente
      </a>
    </StyleFooter>
  );
};

export default Footer;

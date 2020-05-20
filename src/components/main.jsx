import React from "react";
import Styled from "styled-components";
import { Background } from "./elements";

const StyleMain = Styled.main`
    width: 100%;
    height: 464px;
    padding-top: 2em;
    background-size: auto 700px;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: url(${Background});
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        color: #333;
        font-weight: 400;
    }
    .container {
        width: 600px;
        margin: auto;
            @media (max-width: 500px) {
            width: 320px;
            text-align: center;
            }
    }
    h1 {
        margin: 0;
        padding: 1em;
        text-align: center;
        @media (max-width: 500px) {
        padding: 1em 0;
        }
    }
    .inpur {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        box-sizing: border-box;
        color: #333;
        background-color: #ffffff;
        font-size: 16px;
        border: 1px solid #999;
        padding-left: 20px;
        padding-right: 20px;
        @media (max-width: 350px) {
            width: 80%;
            margin: auto;
            text-align: center;
        }
    }
`;

const Main = () => {
  return (
    <StyleMain>
      <div class="container">
        <h1>
          <strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado
          na sua casa <strong>agora</strong>
        </h1>
        <input
          type="text"
          value=""
          placeholder="Inserir endereço para ver preço"
          autocapitalize="none"
          class="inpur"
        />
      </div>
    </StyleMain>
  );
};

export default Main;

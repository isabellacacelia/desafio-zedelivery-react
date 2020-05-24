import React, { useState } from "react";
import Styled from "styled-components";
import { Background } from "./elements";
import AddressContainer from "../containers/addressContainer";
import locationService from "../services/locationService";

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
    .inputMain {
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
  const [addressQuery, setAddressQuery] = useState();
  const [addresses, setAddresses] = useState([]);

  const findAddress = (value) => {
    if (value?.length > 3) {
      setAddressQuery(value);
      locationService.findByAddress(value, (result) => {
        setAddresses(result);
      });
    } else {
      setAddresses([]);
    }
  };

  return (
    <StyleMain>
      <div className="container">
        <h1>
          <strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado
          na sua casa <strong>agora</strong>
        </h1>
        <input
          type="text"
          onKeyUp={(event) => {
            const { value } = event.target;
            findAddress(value);
          }}
          placeholder="Inserir endereço para ver preço"
          className="inputMain"
        />
        <AddressContainer address={addresses} />
      </div>
    </StyleMain>
  );
};

export default Main;

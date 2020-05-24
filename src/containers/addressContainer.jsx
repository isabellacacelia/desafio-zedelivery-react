import React from "react";
import ListAddress from "../components/listAddress";

const AddressContainer = ({ address = [] }) => {
  return (
    <div>
      {address.map(({ longAddress, city, state }) => {
        return (
          <ListAddress longAddress={longAddress} city={city} state={state} />
        );
      })}
    </div>
  );
};

export default AddressContainer;

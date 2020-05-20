import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

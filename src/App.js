import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

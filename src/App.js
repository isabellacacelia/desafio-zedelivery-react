import React from "react";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./pages/products";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;

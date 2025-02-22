import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import ViewProduct from "./viewProduct/ViewProduct";

function App() {
  // create state for product data
  const [product, setProduct] = useState(null);
  //create state for loading
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Header />
      <ViewProduct product={product} />
    </>
  );
}

export default App;

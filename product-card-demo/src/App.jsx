import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./header/Header";
import ViewProduct from "./viewProduct/ViewProduct";

function App() {
  // create state for product data
  const [product, setProduct] = useState(null);
  //create state for loading
  const [loading, setLoading] = useState(true);

  let prodID = 122;
  //fetch product data
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${prodID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <div style={{ padding: "20px", margin: "75px" }}>...loading</div>
      ) : (
        <ViewProduct product={product} />
      )}
    </>
  );
}

export default App;

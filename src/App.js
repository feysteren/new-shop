import { useState, useEffect, useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContext from "./CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const productServer = fetch("https://fakestoreapi.com/products");
    productServer
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        setProductDetails(products);
      });
  }, []);
  const categories = productDetails
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const selectCategory = 10;

  return (
    <>
      <Header categories={categories} selectCategory={selectCategory} />
      <CartContext.Provider value={{ cart, setCart }}>
        <Products productDetails={productDetails} categories={categories} />
        <Cart />
      </CartContext.Provider>
    </>
  );
}

export default App;

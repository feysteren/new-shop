/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect, useRef } from "react";
import "./Home.css";

import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import CartContext from "../CartContext";
import ProductDetails from "./ProductDetails";
import { Routes, Route, useParams } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks

function Home() {
  let { id } = useParams();
  const [cart, setCart] = useState([]);
  const [pDetails, setPDetails] = useState([]);
  const initProducts = useRef([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        setPDetails(products);
        initProducts.current = products;
      });
  }, []);

  console.log();
  const categories = pDetails
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const selectCategory = (category) => {
    const filter = pDetails.filter((item) => item.category === category);
    setPDetails(filter);
  };

  // productDetails.reduce(function (prev, curr) {
  //   return prev.Cost < curr.Cost ? prev : curr;
  // });

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, initProducts, setPDetails }}
      >
        <Header categories={categories} selectCategory={selectCategory} />
        <Products pDetails={pDetails} categories={categories} id={id} />
        <Cart />
      </CartContext.Provider>
      <Routes>
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default Home;

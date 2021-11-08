import React, { useContext } from "react";
import CartContext from "../../CartContext";
import Product from "../Product/Product";
import Products from "../Products/Products";
import "./Cart.css";

// import Product from "../Product/Product";
// import Products from "../Products/Products";

function Cart() {
  const { cart } = useContext(CartContext);

  //console.log(cart);

  //console.log(cart);

  const h6 = `You have ${cart.length} products`;

  return (
    <div className="cart">
      <h1>Cart</h1>
      <h6>{h6}`</h6>
      {/* <Products productDetails={cart} isCart={true} /> */}
    </div>
  );
}
export default Cart;

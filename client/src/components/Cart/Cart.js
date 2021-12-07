import React, { useContext } from "react";
import CartContext from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import Products from "../Products/Products";
import "./Cart.css";

// import Product from "../Product/Product";
// import Products from "../Products/Products";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);
  //console.log(cart);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <h6>You have {cart.length} products</h6>
      {/* {cart.length > 0 && cart.map((item) => console.log(item))}{" "} */}
      {cart.length > 0 &&
        cart.map((item) => (
          <CartItem
            image={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))}{" "}
    </div>
  );
}
export default Cart;

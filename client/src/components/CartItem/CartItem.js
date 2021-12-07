import React from "react";
import "./CartItem.css";

const CartItem = ({ image, title, price }) => {
  return (
    <div className="cart_item_container">
      <div className="cart_item_section">
        <img className="cart_item_image" src={image} alt="" />
        <div>
          <button>+</button>
          <span>0</span>
          <button>-</button>
        </div>
      </div>

      {/* <div className="counterButton">
        <button onClick={cartPlus}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div> */}
    </div>
  );
};

export default CartItem;

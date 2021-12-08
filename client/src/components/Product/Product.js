import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";

import "./Product.css";
// arr.map(p => p.id).indexof()
function Product({ id, title, image, price }) {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const cartPlus = function () {
    const indexItem = cart.map((item) => item.id).indexOf(id);

    if (indexItem === -1) {
      setCart([...cart, { id, title, image, price, amount: 1 }]); // מוסיפה מוצר בפעם הראשונה
    } else {
      cart[indexItem].amount++;
      setCart([
        ...cart.slice(0, indexItem), // [a, b] =====> [...[a, b], c, d]

        { id, title, image, price, amount: cart[indexItem].amount++ },

        ...cart.slice(indexItem + 1),
      ]);
    }

    setCount(count + 1);
  };

  const cartMinus = function () {
    const indexItem = cart.map((item) => item.id).indexOf(id);

    if (indexItem !== -1) {
      const newAmount = cart[indexItem].amount - 1;
      cart[indexItem].amount--;
      setCart([
        ...cart.slice(0, indexItem),

        { id, title, image, price, amount: newAmount },
        ...cart.slice(indexItem + 1),
      ]);
      setCount(count - 1);
    }
    if (cart[indexItem].amount === 0) {
      cart.splice(indexItem, 1);
      setCart(cart.splice(indexItem, 1));
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/Products/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <div className="counterButton">
          <button onClick={cartPlus}>+</button>
          <span>{count}</span>
          <button onClick={cartMinus}>-</button>
        </div>
      </div>
    </div>
  );
}
export default Product;

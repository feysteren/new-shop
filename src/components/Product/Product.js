import React, { useContext } from "react";
import CartContext from "../../CartContext";
import "./Product.css";

function Product({ id, title, image, price }) {
  const { cart, setCart } = useContext(CartContext);

  const result = cart.find((element) => element.id === id);

  console.log(result);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>

      <div className="counterButton">
        <button
          onClick={() =>
            setCart([...cart, { id, title, image, price, amount: 0 }])
          }
        >
          +
        </button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  );
}
export default Product;

import "./Product.css";

function Product({ id, title, image, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info" placeholder="">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
    </div>
  );
}
export default Product;

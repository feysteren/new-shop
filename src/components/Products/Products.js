import Product from "../Product/Product";

/*
const Ab = (props) => {
  props.id;
};
console.log(Products);
*/
// { color: "red"}

function Products({ productDetails }) {
  return productDetails.map(({ id, title, image, price }) => (
    <section className="prodouts">
      <Product key={id} id={id} title={title} image={image} price={price} />
    </section>
  ));
}

export default Products;

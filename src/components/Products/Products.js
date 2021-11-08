import "./Products.css";
import Product from "../Product/Product";

function Products({ productDetails, categories, cart }) {
  return (
    <section className="products">
      {productDetails.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}

          // productDetails={cart}
        />
      ))}
    </section>
  );
}
//   return productDetails.map(({ id, title, image, price }) => (

//       <section className="products">
//         <Product key={id} id={id} title={title} image={image} price={price} />
//       </section>
//     </div>
//   ));
// }

export default Products;

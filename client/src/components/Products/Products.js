import "./Products.css";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

function Products({ pDetails, categories, cart, id }) {
  return (
    <section className="products">
      {pDetails.map(({ _id: id, title, image, price }) => (
        <Product
          id={id}
          title={title}
          image={image}
          price={price}
          key={id}
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

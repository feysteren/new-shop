import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [id]);
  return <div>product {product && product.title}</div>;
}

export default ProductDetails;

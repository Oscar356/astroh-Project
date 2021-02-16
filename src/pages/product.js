import React from "react";
import Layout from "../components/shared/Layout";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { item } = useParams();

  function productCard(productType) {
    return (
      <div class="card">
        <img src="img_avatar.png" alt="Product" 
        // style="width:100%"
         />
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect Engineer</p>
        </div>
      </div>
    );
  }

  return <Layout>{productCard(item)}</Layout>;
}

export default ProductPage;

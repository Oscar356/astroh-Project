import React from "react";
import Layout from "../components/shared/Layout";
import { useParams } from "react-router-dom";
import "./css/product.css";
import blueHoodie from "../images/BlueSweater.jpg";

function ProductPage() {
  const { item } = useParams();
  var dummyData = {
    name: "Blue Sweater",
    price: "39.99",
    imageUrl: blueHoodie
  };

  function productCard(productInfo) {
    return (
      <div className="card">
        <img
          className="productImage"
          src={productInfo.imageUrl}
          alt="Product"
        />

        <div className="cardText">
          <h6>
            <b>{productInfo.name}</b>
          </h6>
          <p>{`$${productInfo.price}`}</p>
        </div>
      </div>
    );
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <Layout>
      <div className="cardContainer">
        <h6 className="pageTitle">
          {capitalize(item)}
        </h6>
        {Array.from({ length: 4 }, () => productCard(dummyData))}
      </div>
    </Layout>
  );
}

export default ProductPage;

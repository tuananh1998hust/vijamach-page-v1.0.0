import React from "react";

// Components
import DetailProduct from "../components/DetailProduct";

const DetailProducts = ({ match }) => (
  <div id="detail-products">
    <DetailProduct id={match.params.id} />
  </div>
);

export default DetailProducts;

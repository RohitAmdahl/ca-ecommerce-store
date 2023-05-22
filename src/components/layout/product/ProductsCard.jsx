import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Card from "../../../style/Container";

const ProductsCards = ({ product }) => {
  const { id, imageUrl, title, price, discountedPrice } = product;
  return (
    <>
      <Card>
        <div className="cards">
          <img src={imageUrl} alt={title} className="card-img" />
          <div className="card-body">
            <p className="title">{title}</p>
            <div className="price">
              <p>{price} kr-</p>
              <p>{discountedPrice} kr-</p>
            </div>

            <div className="btn">
              <Link to={`/detail/${id}`} className="veiw-product-link">
                Veiw Product
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductsCards;

// .toLocalString()

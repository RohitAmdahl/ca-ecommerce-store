import React from "react";
// import Button from "../../../style/Button";
import { NavLink } from "react-router-dom";
import Card from "../../../style/Container";
// import { useParams } from "react-router-dom";
// import Home from "../../../pages/Home";
const ProductsCards = ({ product }) => {
  const { imageUrl, title, price, discountedPrice } = product;
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
              <NavLink to="/detail/:id" className="veiw-product-link">
                Veiw Product
              </NavLink>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductsCards;

// .toLocalString()

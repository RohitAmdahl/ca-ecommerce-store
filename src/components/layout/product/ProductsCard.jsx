import React from "react";
import Button from "../../../style/Button";
import { NavLink } from "react-router-dom";
import Card from "../../../style/Container";
// import { useParams } from "react-router-dom";
const productsCards = ({ product }) => {
  return (
    <>
      <Card>
        <div className="cards">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="card-img"
          />
          <div className="card-body">
            <p className="title">{product.title}</p>
            <div className="price">
              <p>{product.price} kr-</p>
              <p>{product.discountedPrice} kr-</p>
            </div>

            <div className="btn">
              <Button>
                <NavLink to="/detail/:id" className="link">
                  Veiw Product
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default productsCards;

// .toLocalString()

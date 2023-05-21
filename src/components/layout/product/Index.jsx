import React from "react";
import Button from "../../../style/Button";
import { NavLink } from "react-router-dom";
import Card from "../../../style/Container";

const products = ({ cards }) => {
  return (
    <>
      <Card>
        <div className="cards">
          <img src={cards.imageUrl} alt={cards.title} className="card-img" />
          <div className="card-body">
            <p className="title">{cards.title}</p>
            <div className="price">
              <p>{cards.price} kr-</p>
              <p>{cards.discountedPrice} kr-</p>
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

export default products;

// .toLocalString()

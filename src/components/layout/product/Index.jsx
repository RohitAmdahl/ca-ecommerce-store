import React from "react";
import Button from "../../../style/Button";
import { NavLink } from "react-router-dom";
import Card from "../../../style/Container";

const Index = ({ cards }) => {
  return (
    <>
      <Card>
        <div className="cards">
          <img src={cards.imageUrl} alt="" className="card-img" />
          <div className="card-body">
            <p>{cards.title}</p>
            <div>
              <p>{cards.price} kr-</p>
            </div>
            <div>
              <Button>
                <NavLink to="/">Veiw Product</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Index;

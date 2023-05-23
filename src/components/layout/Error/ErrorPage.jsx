import React from "react";
import WrapperSection from "../../../style/WrapperSection";
import Button from "../../../style/Button";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <WrapperSection>
        <div className="error">
          <h1>404</h1>
          <h2>UH OH! You're lost</h2>
          <p>
            The page you are looking for does not exist, but you can click the
            button to go back to home page.
          </p>
        </div>
        <div className="home-error">
          <Link to="/">
            <Button className="home">Home</Button>
          </Link>
        </div>
      </WrapperSection>
    </>
  );
};

export default ErrorPage;

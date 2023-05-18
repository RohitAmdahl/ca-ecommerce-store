import styled from "styled-components";
const Card = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-style: solid;
  border-right-width: 1px;
  border-right-style: solid;
  border-left-width: 1px;
  border-left-style: solid;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  .title {
    padding: 0 1rem;
    font-weight: 700;
  }

  .card {
    display: flex;
    flex-direction: column;
  }
  .card-img {
    width: 100%;
    max-width: 250px;
    padding: 0.8rem;
    aspect-ratio: 1 / 1;
  }

  .card-body {
    display: block;
  }
  .price {
    display: flex;
    gap: 1rem;
  }
  .btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
export default Card;

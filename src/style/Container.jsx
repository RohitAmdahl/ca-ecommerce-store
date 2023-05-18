import styled from "styled-components";
const Card = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.017),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.06);

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
  }
  .price {
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
  }
  .btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`;
export default Card;

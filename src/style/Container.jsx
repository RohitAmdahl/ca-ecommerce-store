import styled from "styled-components";
const Card = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .card {
  }
  .card-img {
    width: 100%;
    max-width: 200px;
    padding: 0.8rem;
  }
  .card-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    background: grey;
  }
`;
export default Card;

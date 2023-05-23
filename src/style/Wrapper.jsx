import { styled } from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  text-transform: capitalize;
  .hero-hedding {
    text-align: center;
    padding: 10px;
    margin: 0 auto;
  }
  .hero-img {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 1rem;
  }
  .btn {
    margin: 1.3rem;
  }
  .shop-btn {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;

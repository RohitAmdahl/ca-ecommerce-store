import { styled } from "styled-components";

const WrapperSection = styled.section`
  .error {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem;
  }

  .home-error {
    margin: 1.5rem;
    .home {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100px;
      margin: 0 auto;
    }
  }
`;

export default WrapperSection;

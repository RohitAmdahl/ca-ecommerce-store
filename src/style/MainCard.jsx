import { styled } from "styled-components";

const Herosection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  gap: 1.5rem;
  @media (max-width: ${(props) => props.theme.color.media.tab}) {
    grid-template-columns: 1fr 1fr;
    max-width: 600px;
    gap: 1rem;
  }
  @media (max-width: ${(props) => props.theme.color.media.mobile}) {
    grid-template-columns: 1fr;
    max-width: 310px;
  }
`;
export default Herosection;

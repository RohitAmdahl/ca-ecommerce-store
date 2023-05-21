import { styled } from "styled-components";

const Herosection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  gap: 1.5rem;
  position: relative;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .veiw-product-link {
    text-decoration: none;
    width: 100%;
    max-width: 250px;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    text-align: center;
    font-weight: 700;
    cursor: pointer;

    box-shadow: 1.7px 0.4px 0.9px rgba(0, 0, 0, 0.022),
      4.1px 0.9px 2.1px rgba(0, 0, 0, 0.032),
      7.8px 1.8px 4px rgba(0, 0, 0, 0.04);
    &:hover {
      border-radius: 1rem;
      transition: 0.2s all;
      background: ${(props) => props.theme.color.hover};
    }
  }
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

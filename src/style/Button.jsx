import { styled } from "styled-components";

const Button = styled.button`
  text-decoration: none;
  background-color: ${(props) => props.theme.color.saleText};
  color: ${(props) => props.theme.color.primary};
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export default Button;

import { styled } from "styled-components";

const Button = styled.button`
  text-decoration: none;
  background-color: ${(props) => props.theme.color.saleText};
  color: ${(props) => props.theme.color.primary};
  outline: 3px solid #ffe4e0;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
  }
`;

export default Button;

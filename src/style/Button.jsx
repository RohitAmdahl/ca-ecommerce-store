import { styled } from "styled-components";

const Button = styled.button`
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
    4.1px 0.9px 2.1px rgba(0, 0, 0, 0.032), 7.8px 1.8px 4px rgba(0, 0, 0, 0.04);
  &:hover {
    background: ${(props) => props.theme.color.hover};
    border-radius: 1rem;
    transition: 0.1s all;
  }
`;

export default Button;

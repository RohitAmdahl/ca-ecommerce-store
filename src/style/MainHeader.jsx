import { styled } from "styled-components";

const MainHeader = styled.header`
  padding: 0 0.5rem;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .logo-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 100%;
    max-width: 120px;
    margin: 1rem;
  }
  .search-input {
    padding: 0.6rem 1.9rem;
    margin: 0 0.6rem;
    box-sizing: border-box;
    width: 100%;
    max-width: 250px;
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    border: 0;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    color: ${(props) => props.theme.color.primary};
  }
  .form-div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export default MainHeader;

import styled from "styled-components";
const Nav = styled.nav`
  .navbar-list {
    display: flex;
    justify-content: center;
    text-decoration: none;

    .navbar-links {
      list-style: none;
      padding: 0 2rem;
      text-decoration: none;
      color: ${(props) => props.theme.color.text};
      font-weight: 700;
      &:hover {
        color: ${(props) => props.theme.color.primary};
        text-decoration: underline;
      }
    }
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      text-transform: uppercase;
      transition: 0.3s liner;
    }
  }
  .nav-underline {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-bottom: 2px solid;
    padding-bottom: 1rem;
    border-color: ${(props) => props.theme.color.secondary};
  }
`;

export default Nav;

import styled from "styled-components";

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    justify-content: center;
    text-decoration: none;

    .navbar-links {
      list-style: none;
      padding: 1rem 2rem;
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
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon [name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.color.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
      z-index: 999;
      font-weight: 800;
      font-size: 1.5rem;
      position: absolute;
      top: 38px;
    }
    .mobile-nav-icon {
      /* display: block;
      z-index: 999; */
      font-weight: 800;
      font-size: 1.5rem;
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 1.5rem;
      position: absolute;
      /* top: 30%;
      right: 10%; */
      z-index: 9999;
    }
    .active .close-outline {
      display: block;
    }
    .navbar-list {
      width: 100vw;
      height: 50vh;
      position: absolute;
      top: 50;
      left: 0;
      background: white;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 1rem;
      transform: translateX(100%);
      transition: all 0.3s liner;
    }
    .active .navbar-list {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s liner;
      .navbar-links {
        font-size: 1rem;
      }
    }
  }
`;

export default Nav;

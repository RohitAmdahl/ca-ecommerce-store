import { styled } from "styled-components";

const ContactDiv = styled.section`
  .heading {
    display: flex;
    justify-content: center;
    margin: 1rem;
    align-items: center;
  }
  iframe {
    width: 100%;
    height: 350px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .Contact-form {
      display: grid;
      justify-content: center;
    }
    .form-div {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;
export default ContactDiv;

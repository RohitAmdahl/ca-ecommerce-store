import { styled } from "styled-components";

const ContactDiv = styled.section`
  .heading {
    text-align: center;
  }
  .contact {
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    padding-top: 10px;
  }
  iframe {
    width: 100%;
    height: 350px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Contact-form {
    margin: 1rem;
  }
  .form-div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  label {
    font-weight: 400;
  }
  input {
    padding: 0.5rem;
    margin-top: 0.2rem;
    border-radius: 0.2rem;
    border: none;
    outline: 1px solid blue;
  }
`;
export default ContactDiv;

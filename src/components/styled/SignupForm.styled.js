import styled from "styled-components";

const SignupForm = styled.form`
  background-color: #bcc;
  height: 50%;
  width: 95%;
  max-width: 350px;
  box-shadow: 0px 2px 5px #555;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }
  div {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 300px;

    label {
      font-size: 1.1rem;
    }

    input {
      padding: 5px 10px;
      font-size: 1.2rem;
      width: 100%;
      outline: 0;
      border: 0;
      color: #233;
    }

    button {
      position: relative;
      top: 2rem;
      color: #455;
      font-size: 1.1rem;
      padding: 10px 20px;
      outline: 0;
      border: 0;
      appearance: none;
      --moz-appearance: none;
      --webkit-appearance: none;
    }
  }
`;

export default SignupForm;

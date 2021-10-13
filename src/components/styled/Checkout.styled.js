import styled from "styled-components";
const Checkout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  label {
    cursor: pointer;
    margin-block: auto;

    p {
      font-size: 1.5rem;
    }
  }
  label:hover {
    text-decoration: underline;
  }
  button {
    cursor: pointer;
    font-size: 2rem;
    padding: 10px 20px;
    margin-block: 1rem;
    color: white;
    background-color: #111;
    border-radius: 4px;
    outline: 0;
    appearance: none;
    --webkit-appearance: none;
    --moz-appearance: none;
    border: 0;
  }
  button:hover {
    background-color: #222;
  }
  button:active {
    transform: scale(0.98);
  }
`;

export default Checkout;

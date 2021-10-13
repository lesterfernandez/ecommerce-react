import styled from "styled-components";

const Cart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 50px 0 25px;
  }
  & > div {
    max-width: 500px;
    width: 90%;
    background-color: #555;
  }
`;

export default Cart;

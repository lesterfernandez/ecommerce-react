import styled from "styled-components";
const CartItem = styled.div`
  padding: 1rem 1rem;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:last-child {
    border-bottom: 0;
  }
`;

export default CartItem;

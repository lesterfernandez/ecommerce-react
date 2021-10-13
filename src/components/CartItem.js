import StyledCartItem from "./styled/CartItem.styled";

const CartItem = ({ name, price }) => (
  <StyledCartItem>
    <p>{name}</p>
    <p>{price}</p>
  </StyledCartItem>
);

export default CartItem;

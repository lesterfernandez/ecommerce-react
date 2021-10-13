import StyledCheckout from "./styled/Checkout.styled";
const Checkout = ({ clearCart }) => {
  return (
    <StyledCheckout>
      <label>
        <p>Check out</p>
      </label>
      <button onClick={clearCart}>
        <i class="fa-solid fa-cart-arrow-down"></i>
      </button>
    </StyledCheckout>
  );
};
export default Checkout;

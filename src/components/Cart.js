import CartItem from "./CartItem";
import Checkout from "./Checkout";
import StyledCart from "./styled/Cart.styled";

const Cart = ({ cart, clearCart }) => {
  return (
    <StyledCart>
      <h1>{cart.length > 0 ? "Cart" : "Cart is empty"}</h1>
      <div>
        {cart.map(item => (
          <CartItem name={item.name} price={item.price} />
        ))}
        {cart.length > 0 && <Checkout clearCart={clearCart} />}
      </div>
    </StyledCart>
  );
};

export default Cart;

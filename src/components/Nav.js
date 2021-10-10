import { Link } from "react-router-dom";
import logo from "../logo192.png";
import StyledNav from "./styled/Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
            <p>React Groceries</p>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

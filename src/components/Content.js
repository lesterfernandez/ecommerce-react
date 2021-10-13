import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Shop from "./Shop";
import StyledContent from "./styled/Content.styled";

const Content = ({ username, addToCart, cart, clearCart }) => {
  const urls = [
    {
      img: "https://images.unsplash.com/photo-1517306085770-871ff74b2274?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80",
      name: "Pancakes",
    },
    {
      img: "https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Pie",
    },
    {
      img: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Salad",
    },
    {
      img: "https://images.unsplash.com/photo-1585238342018-78ef8ee55a59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Burgers",
    },
    {
      img: "https://images.unsplash.com/photo-1586147210169-4f248d3a4696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Bagels",
    },
    {
      img: "https://images.unsplash.com/photo-1558540718-b2303795e6e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Sushi",
    },
    {
      img: "https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Eggs",
    },
    {
      img: "https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Chicken",
    },
    {
      img: "https://images.unsplash.com/photo-1608666660863-695ebbedc848?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80",
      name: "Cheese",
    },
    {
      img: "https://images.unsplash.com/photo-1588173178849-bfe1722f52df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      name: "Spaghetti",
    },
  ];

  return (
    <StyledContent>
      <Switch>
        <Route path="/" exact>
          <Shop urls={urls} username={username} addToCart={addToCart} />
        </Route>

        <Route path="/cart">
          <Cart cart={cart} clearCart={clearCart} />
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;

import StyledContent from "./styled/Content.styled";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </StyledContent>
  );
};

export default Content;

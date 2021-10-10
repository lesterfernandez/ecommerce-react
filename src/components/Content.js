import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";
import StyledContent from "./styled/Content.styled";

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </StyledContent>
  );
};

export default Content;

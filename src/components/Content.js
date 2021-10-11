import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Shop from "./Shop";
import StyledContent from "./styled/Content.styled";

const Content = ({ username }) => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/" exact>
          <Shop username={username} />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;

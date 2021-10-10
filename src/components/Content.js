import StyledContent from "./styled/Content.styled";
import { Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route path="/" exact />
        <Route path="/about" />
        <Route path="/shop" />
        <Route path="/cart" />
      </Switch>
    </StyledContent>
  );
};

export default Content;

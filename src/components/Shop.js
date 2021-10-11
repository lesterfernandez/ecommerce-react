import StyledShop from "./styled/Shop.styled";

const Shop = ({ username }) => {
  return (
    <StyledShop>
      <h1>Welcome {username}</h1>
    </StyledShop>
  );
};

export default Shop;

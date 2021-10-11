import Item from "./Item";
import StyledCatalog from "./styled/Catalog.styled";
import StyledShop from "./styled/Shop.styled";

const Shop = ({ username, urls }) => {
  return (
    <StyledShop>
      <h1>Welcome {username}</h1>
      <p>Catalog</p>
      <StyledCatalog>
        {urls.map((imgStr, i) => (
          <Item bgUrl={imgStr} key={i} />
        ))}
      </StyledCatalog>
    </StyledShop>
  );
};

export default Shop;

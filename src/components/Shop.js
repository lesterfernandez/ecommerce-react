import Item from "./Item";
import StyledCatalog from "./styled/Catalog.styled";
import StyledShop from "./styled/Shop.styled";

const Shop = ({ username, urls }) => {
  return (
    <StyledShop>
      <h1>Welcome {username}</h1>
      <p>Catalog</p>
      <StyledCatalog>
        <Item bgUrl={urls[0]} key={0} />
        <Item bgUrl={urls[1]} key={1} />
        <Item bgUrl={urls[2]} key={2} />
        <Item bgUrl={urls[3]} key={3} />
        <Item bgUrl={urls[4]} key={4} />
        <Item bgUrl={urls[5]} key={5} />
        <Item bgUrl={urls[6]} key={6} />
        <Item bgUrl={urls[7]} key={7} />
        <Item bgUrl={urls[8]} key={8} />
        <Item bgUrl={urls[9]} key={9} />
      </StyledCatalog>
    </StyledShop>
  );
};

export default Shop;

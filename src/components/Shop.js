import Item from "./Item";
import StyledCatalog from "./styled/Catalog.styled";
import StyledShop from "./styled/Shop.styled";

const Shop = ({ username, urls, addToCart }) => {
  return (
    <StyledShop>
      <h1>Welcome {username}</h1>
      <p>Catalog</p>
      <StyledCatalog>
        {urls.map((meal, i) => (
          <Item bgUrl={meal.img} name={meal.name} key={i} addToCart={addToCart} />
        ))}
      </StyledCatalog>
    </StyledShop>
  );
};

export default Shop;

import StyledItem from "./styled/Item.styled";

const Item = ({ bgUrl, name, addToCart }) => {
  const addItem = () => {
    addToCart({ name: name, price: 5.99 });
  };
  return (
    <StyledItem bgUrl={bgUrl}>
      <div>
        <h2>{name}</h2>
        <p>$5.99</p>
        <button onClick={addItem}>Add to cart</button>
      </div>
    </StyledItem>
  );
};

export default Item;

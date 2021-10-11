import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  background-color: #556;
  height: 250px;
  outline: 1px solid gray;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Item;

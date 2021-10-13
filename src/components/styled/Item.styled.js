import styled from "styled-components";

const Item = styled.div`
  position: relative;
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

  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #4447;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    h2 {
      font-family: "Lobster";
    }

    button {
      outline: 0;
      border: 0;
      appearance: none;
      --moz-appearance: none;
      --webkit-appearance: none;
      padding: 10px 20px;
      &:active {
        transform: scale(0.97);
      }
    }
  }
  & > div:hover {
    opacity: 1;
  }
`;

export default Item;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: white;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    min-width: 100vw;
    background-image: linear-gradient(180deg, #321, #455);
  }

`;

export default GlobalStyle;

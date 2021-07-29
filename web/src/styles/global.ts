import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 87.5%;

    @media (min-width: 750px) {
      font-size: 93.75%;
    }

    @media (min-width: 1080px) {
      font-size: 100%
    }
  }

  body {
    font: 1rem 'Roboto', sans-serif;
    background: #F0F2F5;
  }

  h1 {
    font-family: 'Poppins', Verdana, sans-serif;
  }
`;

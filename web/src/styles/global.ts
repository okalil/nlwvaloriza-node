import { createGlobalStyle } from 'styled-components';

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
    background: ${({ theme }) => theme.colors.bgGeneral};
  }

  h1 {
    font-family: 'Poppins', Verdana, sans-serif;
  }

  input, textarea {
    font: 1rem 'Roboto', sans-serif;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${props => props.theme.borderRadius};
    
    &::placeholder {
      font: 1rem 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors.placeholder}}
  }

  img {
    max-width: 100%;
  }
`;

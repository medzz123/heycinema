import { createGlobalStyle, css } from 'styled-components';

// Inside css for auto formatting with eslint
const styles = css`
  html {
    font-family: 'Mulish', sans-serif;
    scroll-behavior: smooth;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: grey;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-size: 16px;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;

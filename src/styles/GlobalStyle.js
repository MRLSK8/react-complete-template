import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.background}
  }
  a {
    text-decoration: none
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;

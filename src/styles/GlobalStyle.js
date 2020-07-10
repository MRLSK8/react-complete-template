import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
    background-color: ${(props) => props.theme.background}
  }
  a {
    text-decoration: none
  }
`;

export default GlobalStyle;

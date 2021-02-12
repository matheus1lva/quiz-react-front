import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    background: #006699;
  }

  html, body, #root {
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
`;

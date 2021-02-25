import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    background: white;
    color: #1e2933;
  }

  html, body, #root {
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
`;

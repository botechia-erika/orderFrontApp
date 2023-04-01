// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  td, tr{
    height: 80px;

background: #FFFFFF;
mix-blend-mode: normal;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  }

  table     img {
  width: 80px;
  height:80px;
  object-fit: contain;
  border-radius:  100%;
  border: 2px solid gold;

  }
`;

export default GlobalStyle;

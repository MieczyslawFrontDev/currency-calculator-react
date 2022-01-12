import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 20px;
}

*,
::after,
::before {
  box-sizing: inherit;
}

#root {
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
p,
ul,
li
 {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth; 
}

ul{
  list-style: none;
    padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

input,
button {
  font: inherit;
}`;

export default GlobalStyle;

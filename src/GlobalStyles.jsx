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
}

:root {
  --main-text-color: #212121;
  --secondary-text-color: #9B9FAA;
  --white: #ffffff;
  --accent-color: #FC842D;
  --secondary-background-color: #F0F1F3;

  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;

  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1280px;
}`;

export default GlobalStyle;

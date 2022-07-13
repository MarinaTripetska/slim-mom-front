import { createGlobalStyle } from 'styled-components';
import Verdana from './assets/fonts/verdana.ttf';
import VerdanaBold from './assets/fonts/verdanab.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Verdana';
  src: url(${Verdana}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Verdana';
  src: url(${VerdanaBold}) format('truetype');
  font-weight: 700;
}

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
  font-family: 'Verdana';
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 0.04em;
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
  --accent-shadow: rgba(252, 132, 45, 0.5);
  --secondary-background-color: #F0F1F3;

  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;

  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1280px;
}`;

export default GlobalStyle;

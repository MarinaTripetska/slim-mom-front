import { createGlobalStyle } from 'styled-components';
import Verdana from './fonts/verdana.ttf';
import VerdanaBold from './fonts/verdanab.ttf';
import Edu from './fonts/EduTASBeginner-Regular.ttf';

const GlobalStyle = createGlobalStyle`

@font-face { 
  font-family: 'Edu TAS Beginner';
  src: url(${Edu}) format('truetype');
  /* src: local('verdana'), url(./fonts/verdana.ttf) format('ttf'); */
  font-weight: 400;
  /* font-size: 32px; */
}

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
  font-family: 'Edu TAS Beginner', cursive;
  /* font-family: 'Verdana'; */
  /* font-weight: 700; */
  font-size: 32px;
  /* font-family: 'Verdana Bold'; */
}

.test1{
  font-family: 'Verdana';
  /* font-weight: 100; */
}
.test2{
  font-family: 'Verdana';
  font-weight: 700;
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
}
`;

export default GlobalStyle;

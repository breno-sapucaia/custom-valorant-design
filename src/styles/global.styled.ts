import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: button;
}

* {
  box-sizing: border-box;
}

@font-face {
  font-family: "Druk Wide";
  src: url("//db.onlinewebfonts.com/t/7e389c5e310dc537b083e0e25ea6eab5.eot");
  src: url("//db.onlinewebfonts.com/t/7e389c5e310dc537b083e0e25ea6eab5.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/7e389c5e310dc537b083e0e25ea6eab5.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/7e389c5e310dc537b083e0e25ea6eab5.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/7e389c5e310dc537b083e0e25ea6eab5.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/7e389c5e310dc537b083e0e25ea6eab5.svg#Druk Wide Medium") format("svg");
}

:root {
  --background-color-500: #1f2326;
  --background-color-white-500: #f8f8f8;
  --secondary-text-500: #FF4656;
}

`;

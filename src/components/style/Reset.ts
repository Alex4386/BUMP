import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
html {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
button, input {
  outline: none;
}
`;

import { createGlobalStyle, css } from 'styled-components';


export const bodyStyles = css`
  /* global styles */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
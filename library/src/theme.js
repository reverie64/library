import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
       font-family: "Open Sans", sans-serif;
          letter-spacing: 0.1rem;
           margin: 0;
    box-sizing: border-box;

/* fffffe*/



  }

`;
export const lightTheme = {
    body: "#f1f1f1",
    text: "#2d334a",
};
export const darkTheme = {
    body: "#2d334a",
    text: "#f1f1f1",
};

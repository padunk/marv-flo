import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  :root {
    --color-text: ${theme`textColor.gray.900`};
    --color-background: ${theme`colors.white`};
    --color-primary: ${theme`colors.blue.400`};
    --text-sans: 'Noto Sans TC', sans-serif;
    --text-serif: 'Playfair Display SC', serif;
  }

  body {
    ${tw`antialiased`}
    font-family: var(--text-sans);
  }
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
);

export default GlobalStyles;

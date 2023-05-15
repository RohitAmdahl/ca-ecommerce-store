import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    buttonborder: "#FFE4E0",
    text: "var(--color-text)",
    htmlbgcolor: "var(--html-bgcolor)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    tertiary: "#FF0000",
    saleText: "#ffffff",
    media: { mobile: "420px", tab: "998px", laptop: "1200" },
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

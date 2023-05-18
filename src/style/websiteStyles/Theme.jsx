import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    buttonborder: "var(--color-border)",
    text: "var(--color-text)",
    htmlbgcolor: "var(--html-bgcolor)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    tertiary: "var(--color-tertiary)",
    saleText: "var(--color-saletext)",
    hover: "var(--color-hover)",
    media: { mobile: "420px", tab: "998px", laptop: "1200" },
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

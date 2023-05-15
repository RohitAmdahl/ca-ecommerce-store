import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

html{
    --color-primary:#1000CB;
    --color-secondary:#FFE4E0;
    --color-tertiary:#FF0000;
    --color-text: #484747;
    --color-saletext:#ffffff;
    --color-border:#FFE4E0;
    --html-bgcolor :#FAFAFA;
    height: 100%;
}

body{
    background:${(props) => props.theme.color.htmlbgcolor};
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
export default GlobalStyle;

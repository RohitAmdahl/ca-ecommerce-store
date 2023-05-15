import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
html{
    --color-primary:#1000CB;
    --color-secondary:#FFE4E0;
    --color-text: #484747;
    --html-bgcolor :#FAFAFA
    height: 100%;
}
body{
    height: 100%;
}

`;
export default GlobalStyle;

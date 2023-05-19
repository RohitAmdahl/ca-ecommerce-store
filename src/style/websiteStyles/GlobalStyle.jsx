import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    margin: 0 ,auto;
    box-sizing: border-box;
    overflow-x: hidden;
     outline:2px solid red; 
}

html{
    --color-primary:#1000CB;
    --color-secondary:#FFE4E0;
    --color-tertiary:#FF0000;
    --color-text: #484747;
    --color-saletext:#ffffff;
    --color-border:#FFE4E0;
    --html-bgcolor :#FAFAFA;
    --color-hover:#301FFD;
   
}

body{
    background:${(props) => props.theme.color.htmlbgcolor};
    color:${(props) => props.theme.color.text};
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
h1{
    font-size:3rem;
    font-weight:700;
}

h2{  
    font-size:2rem;
    font-weight:700;
}

h3{
     font-size:1.5rem;
    font-weight:700;
}

h4{ 
    font-size:1rem;
    font-weight:700;
}

p{ 
    line-height:1.5rem;
    margin-top:1rem;
    font-size:1rem;
    font-weight:400;
}
a, Navlink{
    text-decoration: none;
      color: ${(props) => props.theme.color.secondary};
}
li{
    list-style: none;
}

`;

export default GlobalStyle;

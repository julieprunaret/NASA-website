import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        min-height: 100 vh;
        background-color: #2F2E41;
        margin: 0;
        display: flex;
        justify-content: center
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;

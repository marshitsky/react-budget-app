import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: "Helvetica", sans-serif;
        font-size: 16px;
    }
    ol, ul {
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    button, a {
        cursor: pointer;
    }
    #root {
        display: grid;
        background-color: #1e3542;
    }
`;

export { GlobalStyles };

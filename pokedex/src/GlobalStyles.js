import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #9d8eaf;
        background-color: #7279aa;
    }

    #root {

    }
`

export default GlobalStyles
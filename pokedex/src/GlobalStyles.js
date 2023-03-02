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
        font-family: 'Kanit', sans-serif;
        color: #eee;
    }

    #root {

    }
`

export default GlobalStyles
import styled from "styled-components";

export const PokemonPageContainer = styled.div`
    border: 2px solid black;
    height: 100%;
    display: grid;
    align-content: center;


   .pokemon-page {
    border: 2px solid red;
    display: flex;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
   }

    .left-side {
        width: 50%;
        border: 2px solid red;
    }

    img {
        width: 50%;
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
    }

    .bottom-container {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .stats-container {
        font-size: 1.2rem;
        width: 100%;
    }

    .stats-cell {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        gap: 50px;
    }

    .progress-complete {
        background: green;
        width: 0;
    }

    @media all and (min-width: 1500px) {
    img {
        width: 20%;
        
    }
    }
`
import styled from "styled-components";

export const PokemonPageContainer = styled.div`
    border: 2px solid black;
    height: 100%;
    display: grid;
    align-content: center;


   .pokemon-page {
    padding: 10px; 
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
        border-right: 2px solid black;
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

    .progress-bar {
        height: 10px;
        width: 50%;
        background-color: #eee;
        border-radius: 40px;
    }

    .progress-complete {
        background: #333b66;
        width: 0;
    }

// Right side 

    .right-side {
        width: 50%;
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        font-size: 1.5rem;
    }

    .heading {
        color: black;
        text-decoration: underline;
        text-align: center;
    }

    .info {
        text-align: center;
    }

    .height-weight-container {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    .type-ability-container {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .types {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    .type {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        border: 2px solid black;
        border-radius: 5px;
        width: 60px;
        height: 1px;
        padding: 15px;
        color: black;
    }

    .abilities {
        text-align: center;
    }
    @media all and (min-width: 1500px) {
    img {
        width: 20%;
        
    }
    }
`
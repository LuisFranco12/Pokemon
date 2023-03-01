import styled from "styled-components";

export const DisplayPokemonContainer = styled.div`
    position: relative;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    width: 80%;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
    column-gap: 1.5rem;
    font-family: 'Kanit', sans-serif;

    img {
        width: 60%;
    }

    .img-div {
        // background-color: lightgray;
        border: 2px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .pokemon-cell {
        border-radius: 2rem;
        border: 1px solid orange;
        background-color: #364266;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .pokemon-cell, img {
        padding: .5rem;
        align-self: center;
    }

    .pokemon, h3 {
        padding: 1rem;
        align-self: flex-start;
    }

        @media all and (min-width: 1500px) {
            img {
                width: 37%;
                
            }
            h3 {
                margin-left: 3rem;
                font-size: 1.5rem;
            }
        }
`
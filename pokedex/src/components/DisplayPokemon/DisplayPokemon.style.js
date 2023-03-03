import styled from "styled-components";

export const DisplayPokemonContainer = styled.div`
    margin-top: 1.2rem;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
    column-gap: 1.5rem;

    img {
        width: 60%;
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

    a {
        text-decoration: none;
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
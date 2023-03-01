import styled from "styled-components";

export const Container = styled.div`

    .parent-ul {
        display: grid;
        align-items: center;
        background-color: black;
        color: white;
        height: 5em;
        font-size: 1.2rem;
        font-family: 'Silkscreen', cursive;
        display: flex;
        list-style: none;
        justify-content: space-between;
        padding: 0 5rem;
        align-itmes: center;
    }

    .right-list-items {
        display: flex;
        gap: 3em;
    }

    a {
        text-decoration: none;
        color: white;
    }
`
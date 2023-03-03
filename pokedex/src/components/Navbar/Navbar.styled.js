import styled from "styled-components";

export const Container = styled.div`

    .parent-ul {
        display: grid;
        align-items: center;
        background-color: #303036;
        color: white;
        height: 4em;
        font-size: 1.5rem;
        font-family: 'Silkscreen', cursive;
        display: flex;
        list-style: none;
        justify-content: space-between;
        padding: 0 5rem;
        align-itmes: center;
        box-shadow: 0 2px 2px 4px rgba(0,0,0,0.15);
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
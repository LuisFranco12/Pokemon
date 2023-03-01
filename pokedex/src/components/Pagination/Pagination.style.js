import styled from "styled-components";

export const PaginationContainer = styled.div`
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        gap: 5px; 
    }

    button {
        background-color: #7279aa;
        color: white;
        border: none;
        border: 1px solid #d18204;
        border-radius: 3px;
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

    button:hover {
        background-color: #323135;
        background-color: #2d2d2d;
        // color: black;
    }

`
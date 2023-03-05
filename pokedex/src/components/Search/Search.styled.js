import styled from "styled-components";

export const SearchContainer = styled.div`
    margin: 0;
    padding: 0;
    .input-container {
        padding-top: 10px;
        height: 5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 10.5%;
    }

    input {
        outline: none;
        background-color: #eee;
        border: none;
        width: 20%;
        height: 1.83rem;
        font-size: 1rem;
        padding-left: 8px;
        
    }

    input::placeholder {
        color: light-gray;
        opacity: 0.4;
    }

    .show-all-button {
        background-color: #e4e4e4;
        width: 4rem;
        height: 29px;
        border: none;
        border-right: 1px solid #d7d7d7;
        cursor: pointer;
    }

    .search-button {
        width: 3.5rem;
        height: 30px;
        background-color: #272727;
        color: white;
        border: none;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-left: 1px solid black;
        cursor: pointer;
    }

    @media all and (min-width: 1500px) {
        input {
            display: flex;
            align-items: center;
        }
    }
`
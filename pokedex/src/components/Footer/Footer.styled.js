import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 1.1rem 3rem;
    height: 1.2rem;
    background-color: #303036;
    // background-color: #262626;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-container {
        // border: 2px solid red;
        display: flex;
        justify-content: center;
        align-item: center;
        gap: 20px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 25px;
    }
`
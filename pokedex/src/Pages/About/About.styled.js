import styled from "styled-components";
export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;

    .centered-content {
        width: 100%;
        display: flex;
        align-items: center;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }

    .img-container {
        width: 50%;
        display: flex;
        justify-content: center;
    }

    img {
        max-width: 100%;
        max-height: 60%;
        border-radius: 10px;
    }

    .about-text {
        width: 50%;
        padding: 2rem;
        background-color: ;
        background-color: #484D6D;
    }

    h1 {
        text-align: center;
    }

    .description {
        text-align: start;
        padding: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #99D5C9;
    }

    .image-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media all and (min-width: 1500px) {
        .centered-content {
            width: 50%;
        }
    }
`
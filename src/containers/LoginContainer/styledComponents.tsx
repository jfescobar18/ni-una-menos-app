import styled from "styled-components"

export const ParentContainer = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #5f0f5f;
    flex-direction: column;

    @media (min-width: 320px) {
        height: fit-content;
    }

    @media (min-width: 768px) {
        height: 100vh;
    }
`

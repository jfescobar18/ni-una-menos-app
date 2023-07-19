// Libs
import styled from "styled-components"

export const ParentContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #5f0f5f;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - ${(props) => props.inlist * 32}px);
    bottom: 50%;
`

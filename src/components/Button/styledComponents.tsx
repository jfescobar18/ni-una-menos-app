// React
import { Link } from "react-router-dom"
// Libs
import styled from "styled-components"

export const StyledButton = styled(Link)<{
    bgcolor: string
    textcolor: string
    width: string
}>`
    display: inline-block;
    margin: 10px;
    padding: 12px 20px;
    text-align: center;
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.textcolor};
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &:hover {
        filter: drop-shadow(0 0 7px ${(props) => props.bgcolor});
    }

    &.s {
        font-size: 16px;
    }

    &.m {
        font-size: 22px;
    }

    &.l {
        font-size: 26px;
    }

    &.xl {
        font-size: 30px;
    }

    @media (min-width: 320px) {
        width: 230px;
    }

    @media (min-width: 375px) {
        width: ${(props) => props.width};
    }
`

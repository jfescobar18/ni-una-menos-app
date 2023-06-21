import styled from "styled-components"

export const StyledButton = styled.a<{
    bgColor: string
    textColor: string
    width: string
}>`
    display: inline-block;
    margin: 10px;
    padding: 12px 20px;
    text-align: center;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    width: ${(props) => props.width};
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &:hover {
        filter: drop-shadow(0 0 7px ${(props) => props.bgColor});
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
`

// Libs
import styled from "styled-components"

export const StyledHeader = styled.h1`
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${(props) => props.color};

    &.s {
        font-size: 16px;
    }

    &.m {
        font-size: 22px;
    }

    &.l {
        font-size: 36px;
    }

    &.xl {
        font-size: 42px;
    }
`

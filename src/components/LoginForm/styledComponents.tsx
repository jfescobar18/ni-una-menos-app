// Libs
import styled from "styled-components"

export const ParentContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, #00dbde, #fc00ff);
`

export const FormContainer = styled.div`
    background: #fff;
    max-width: 350px;
    width: 100%;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
`

export const FormTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    position: relative;
    text-align: center;
    &:before {
        content: "";
        position: absolute;
        height: 4px;
        width: 33px;
        left: 0px;
        bottom: 3px;
        border-radius: 5px;
    }
`

export const InputBox = styled.div`
    width: 100%;
    height: 45px;
    margin-top: 25px;
    margin-bottom: 5px;
    position: relative;
    &.button {
        margin: 40px 0 20px 0;
    }
    &:not(:last-child) {
        border-bottom: solid 4px #333333;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 16px;
    border: none;

    &[type="submit"] {
        background: linear-gradient(to left, #00dbde, #fc00ff);
        font-size: 17px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            letter-spacing: 1px;
            background: linear-gradient(to left, #00e4e8 0%, #bb00ff 100%);
        }
    }
`

export const StyledButton = styled.button`
    margin: 40px 0 20px 0;
`

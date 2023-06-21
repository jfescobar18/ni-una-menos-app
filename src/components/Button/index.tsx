import { useEffect, useState } from "react"
import { StyledButton } from "./styledComponents"

export interface iButton {
    to: string
    text: string
    bgcolor: string
    textcolor: string
    size?: string
    width?: string
}

export const Button = ({
    to,
    text,
    bgcolor = "#fff",
    textcolor = "#5f0f5f",
    size = "s",
    width = "125px",
}: iButton) => {
    const [sizeClass, setSizeClass] = useState<string>("s")

    useEffect(() => {
        setSizeClass(size.toLowerCase())
    }, [size])

    return (
        <>
            <StyledButton
                to={to}
                bgcolor={bgcolor}
                textcolor={textcolor}
                width={width}
                className={sizeClass}
            >
                {text}
            </StyledButton>
        </>
    )
}

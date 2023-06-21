import { useEffect, useState } from "react"
import { StyledButton } from "./styledComponents"

export interface iButton {
    href: string
    text: string
    bgColor: string
    textColor: string
    size?: string
    width?: string
}

export const Button = ({
    href,
    text,
    bgColor = "#fff",
    textColor = "#5f0f5f",
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
                href={href}
                bgColor={bgColor}
                textColor={textColor}
                width={width}
                className={sizeClass}
            >
                {text}
            </StyledButton>
        </>
    )
}

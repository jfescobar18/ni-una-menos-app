import { useEffect, useState } from "react"
import { StyledHeader } from "./styledComponents"

export interface iHeader {
    text: string
    size: string
    color?: string
}

const Header = ({ text, size, color = "#000" }: iHeader) => {
    const [sizeClass, setSizeClass] = useState<string>("s")

    useEffect(() => {
        setSizeClass(size.toLowerCase())
    }, [size])

    return (
        <>
            <StyledHeader color={color} className={sizeClass}>
                {text}
            </StyledHeader>
        </>
    )
}

export default Header

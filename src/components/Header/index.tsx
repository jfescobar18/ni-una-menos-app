import { useEffect, useState } from "react"
import { StyledHeader } from "./styledComponents"

interface HeaderProps {
    text: string
    size?: string
    color?: string
}

const Header = ({ text, size = "s", color = "#000" }: HeaderProps) => {
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

// Styled Components
import { StyledHeader } from "./styledComponents"

interface HeaderProps {
    text: string
    size?: string
    color?: string
}

const Header = ({ text, size = "s", color = "#000" }: HeaderProps) => {
    return (
        <>
            <StyledHeader color={color} className={size.toLocaleLowerCase()}>
                {text}
            </StyledHeader>
        </>
    )
}

export default Header

import Header from "../../components/LoginForm/Header"
import { ParentContainer } from "../LoginContainer/styledComponents"

const MenuContainer = () => {
    return (
        <>
            <ParentContainer>
                <Header color="#fff" size="l" text="Bienvenida" />
                <Header
                    color="#fff"
                    size="m"
                    text="Seleccione un dispositivo"
                />
            </ParentContainer>
        </>
    )
}

export default MenuContainer

import { Button } from "../../components/Button"
import Header from "../../components/Header"
import { ParentContainer } from "../LoginContainer/styledComponents"
import { ButtonContainer } from "./styledComponents"

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
                <ButtonContainer>
                    <Button
                        to="/Dashboard"
                        text="Dispositivo 1"
                        bgcolor="#fff"
                        textcolor="#5f0f5f"
                        width="300px"
                        size="s"
                    />
                    <Button
                        to="/Dashboard"
                        text="Dispositivo 2"
                        bgcolor="#fff"
                        textcolor="#5f0f5f"
                        width="300px"
                        size="s"
                    />
                </ButtonContainer>
            </ParentContainer>
        </>
    )
}

export default MenuContainer

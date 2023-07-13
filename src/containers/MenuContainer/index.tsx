import { Button } from "../../components/Button"
import Header from "../../components/Header"
import { ParentContainer, ButtonContainer } from "./styledComponents"
import { MariaDevice } from "../../types/MariaDevice"
import { useDispatch } from "react-redux"
import { setActiveDevice } from "../../app/activeDevice/actions"

const MenuContainer = () => {
    const dispatch = useDispatch()

    const mockedDevices: MariaDevice[] = [
        { id: "001", name: "Francisco", alias: "Paco" },
        { id: "002", name: "Fernanda", alias: "Fer" },
        { id: "003", name: "Mariana", alias: "Mariana" },
        { id: "004", name: "Dante", alias: "Dan" },
        { id: "005", name: "Alvaro", alias: "Alvaro" },
    ]

    const updateCurrentDevice = (id: string) => {
        const filteredDevice = mockedDevices.find((device) => device.id === id)

        if (filteredDevice) {
            dispatch(setActiveDevice(filteredDevice))
        }
    }

    return (
        <>
            <ParentContainer>
                <Header color="#fff" size="l" text="Bienvenida" />
                <Header
                    color="#fff"
                    size="m"
                    text="Seleccione un dispositivo"
                />
                <ButtonContainer inlist={mockedDevices.length}>
                    {mockedDevices.map((device) => {
                        return (
                            <Button
                                to="/Dashboard"
                                onClick={() => updateCurrentDevice(device.id)}
                                text={`Dispositivo de ${device.alias}`}
                                bgcolor="#fff"
                                textcolor="#5f0f5f"
                                width="300px"
                                size="s"
                            />
                        )
                    })}
                </ButtonContainer>
            </ParentContainer>
        </>
    )
}

export default MenuContainer

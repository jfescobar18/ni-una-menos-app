import { Button } from "../../components/Button"
import { InfoCard } from "../../components/InfoCard"
import { ParentContainer } from "../LoginContainer/styledComponents"
import { ButtonContainer, LocationContainer } from "./styledComponents"

const DashboardContainer = () => {
    // AIzaSyCthUx0-Y6uSgZ5ts2JvsS9HtL9IEh8wwU
    return (
        <>
            <ParentContainer>
                <ButtonContainer>
                    <Button
                        to="/Menu"
                        text="Regresar"
                        bgColor="#fff"
                        textColor="#5f0f5f"
                        width="60px"
                        size="s"
                    />
                </ButtonContainer>

                <LocationContainer>
                    <InfoCard
                        name="Juanita Perez"
                        lastLocation="lastLocation"
                        SOSTime="SOSTime"
                    />
                </LocationContainer>
            </ParentContainer>
        </>
    )
}

export default DashboardContainer

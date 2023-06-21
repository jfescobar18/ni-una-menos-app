import { Button } from "../../components/Button"
import { InfoCard } from "../../components/InfoCard"
import MapCard from "../../components/MapCard"
import { ParentContainer } from "../LoginContainer/styledComponents"
import { ButtonContainer, LocationContainer } from "./styledComponents"

const DashboardContainer = () => {
    return (
        <>
            <ParentContainer>
                <ButtonContainer>
                    <Button
                        to="/Menu"
                        text="Regresar"
                        bgcolor="#fff"
                        textcolor="#5f0f5f"
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
                    <MapCard />
                </LocationContainer>
            </ParentContainer>
        </>
    )
}

export default DashboardContainer

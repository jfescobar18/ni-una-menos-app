import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { InfoCard } from "../../components/InfoCard"
import MapCard from "../../components/MapCard"
import { ParentContainer } from "../LoginContainer/styledComponents"
import { ButtonContainer, LocationContainer } from "./styledComponents"
import { coordinatesGenerator } from "../../utils/coordinatesGenerator"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"

const DashboardContainer = () => {
    const start = { lat: 19.347622, lng: -99.275614 }
    const end = { lat: 19.490966, lng: -99.126652 }

    const [centerPosition, setCenterPosition] = useState<GoogleMapsPosition>({
        lat: 19.347622,
        lng: -99.275614,
    })

    const [markerPosition, setMarkerPosition] = useState<GoogleMapsPosition>({
        lat: 0,
        lng: 0,
    })

    const getCoordinates = async () => {
        for await (const coordinate of coordinatesGenerator(start, end, 20)) {
            setMarkerPosition(coordinate)
            setCenterPosition(coordinate)
        }
    }

    useEffect(() => {
        getCoordinates()
    }, [])

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
                    <MapCard
                        markerPosition={markerPosition}
                        center={centerPosition}
                        zoom={15}
                    />
                </LocationContainer>
            </ParentContainer>
        </>
    )
}

export default DashboardContainer

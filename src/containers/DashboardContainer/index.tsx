import { useEffect, useState } from "react"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"
import { parseGoogleCoordinates, parseSOS } from "../../utils/mqttParser"
import { useMqtt } from "../../hooks/useMqtt"
import { Button } from "../../components/Button"
import { InfoCard } from "../../components/InfoCard"
import MapCard from "../../components/MapCard"
import { ButtonContainer, LocationContainer } from "./styledComponents"
import { ParentContainer } from "../LoginContainer/styledComponents"

const DashboardContainer = () => {
    const [showMap, setShowMap] = useState<boolean>(false)
    const [direction, setDirection] = useState<string>("")
    const [SOSAlertTime, setSOSAlertTime] = useState<string | null>(null)
    const { mqttSubscribe, isConnected, payload } = useMqtt()
    const [centerPosition, setCenterPosition] = useState<GoogleMapsPosition>({
        lat: 0,
        lng: 0,
    })
    const [markerPosition, setMarkerPosition] = useState<GoogleMapsPosition>({
        lat: 0,
        lng: 0,
    })

    const getCoordinatesAndDirection = async () => {
        const { coordinates, direction } = await parseGoogleCoordinates(
            payload.message
        )

        setDirection(direction)
        setMarkerPosition(coordinates)
        setCenterPosition(coordinates)
    }

    useEffect(() => {
        if (isConnected) {
            mqttSubscribe("location")
            mqttSubscribe("sosalert")
        }
    }, [isConnected])

    useEffect(() => {
        try {
            if (payload.message && ["sosalert"].includes(payload.topic)) {
                const alertResult = parseSOS(payload.message)

                if (alertResult) {
                    setShowMap(true)
                    setSOSAlertTime(alertResult)
                } else {
                    setShowMap(false)
                }
            } else if (
                payload.message &&
                ["location"].includes(payload.topic)
            ) {
                getCoordinatesAndDirection()
            }
        } catch (error) {
            console.log(error)
        }
    }, [payload])

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
                        lastLocation={direction}
                        SOSTime={SOSAlertTime}
                    />
                    <MapCard
                        markerPosition={markerPosition}
                        center={centerPosition}
                        zoom={15}
                        showMap={showMap}
                    />
                </LocationContainer>
            </ParentContainer>
        </>
    )
}

export default DashboardContainer

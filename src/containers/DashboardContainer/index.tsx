// React
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// Components and Containers
import { Button } from "../../components/Button"
import { InfoCard } from "../../components/InfoCard"
import MapCard from "../../components/MapCard"
// Types and Interfaces
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"
import { MariaDevice } from "../../types/MariaDevice"
// Hooks
import { useMqtt } from "../../hooks/useMqtt"
// Utils
import { parseGoogleCoordinates, parseSOS } from "../../utils/mqttParser"
// Styled Components
import { ButtonContainer, LocationContainer } from "./styledComponents"
import { ParentContainer } from "../LoginContainer/styledComponents"

const DashboardContainer = () => {
    const navigate = useNavigate()
    const activeDevice = useSelector(
        (state: { activeDevice: MariaDevice }) => state.activeDevice
    )
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
        if (activeDevice.id === "0") {
            navigate("/Menu")
        }
    })

    useEffect(() => {
        if (isConnected) {
            mqttSubscribe(`${activeDevice.id}-location`)
            mqttSubscribe(`${activeDevice.id}-sosalert`)
        }
    }, [isConnected])

    useEffect(() => {
        try {
            if (payload.message && payload.topic.includes("sosalert")) {
                const alertResult = parseSOS(payload.message)

                if (alertResult) {
                    setShowMap(true)
                    setSOSAlertTime(alertResult)
                } else {
                    setShowMap(false)
                }
            } else if (payload.message && payload.topic.includes("location")) {
                getCoordinatesAndDirection()
            }
        } catch (error) {
            console.error(error)
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
                        name={activeDevice.name}
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

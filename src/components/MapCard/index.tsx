import { MapContainer } from "./styledComponent"
import { Wrapper } from "@googlemaps/react-wrapper"
import MapView from "./MapView"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"

interface MapCardProps {
    markerPosition: GoogleMapsPosition
    center: GoogleMapsPosition
    zoom: number
}

const MapCard = ({ markerPosition, center, zoom }: MapCardProps) => {
    return (
        <>
            <MapContainer>
                <Wrapper apiKey={"AIzaSyCthUx0-Y6uSgZ5ts2JvsS9HtL9IEh8wwU"}>
                    <MapView
                        markerList={[markerPosition]}
                        center={center}
                        zoom={zoom}
                    />
                </Wrapper>
            </MapContainer>
        </>
    )
}

export default MapCard

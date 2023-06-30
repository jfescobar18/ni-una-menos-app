import { MapContainer, MapSkeleton } from "./styledComponent"
import { Wrapper } from "@googlemaps/react-wrapper"
import MapView from "./MapView"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"

interface MapCardProps {
    markerPosition: GoogleMapsPosition
    center: GoogleMapsPosition
    zoom: number
    showMap: boolean
}

const MapCard = ({ markerPosition, center, zoom, showMap }: MapCardProps) => {
    return (
        <>
            <MapContainer>
                {showMap ? (
                    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                        <MapView
                            markerList={[markerPosition]}
                            center={center}
                            zoom={zoom}
                        />
                    </Wrapper>
                ) : (
                    <MapSkeleton>Ubicacion aún no solicitada</MapSkeleton>
                )}
            </MapContainer>
        </>
    )
}

export default MapCard

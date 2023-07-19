import { MapContainer, MapSkeleton } from "./styledComponent"
import { Wrapper } from "@googlemaps/react-wrapper"
import MapView, { Marker } from "./MapView"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"
import { useEffect, useState } from "react"

interface MapCardProps {
    markerPosition: GoogleMapsPosition
    center: GoogleMapsPosition
    zoom: number
    showMap: boolean
}

const MapCard = ({ markerPosition, center, zoom, showMap }: MapCardProps) => {
    const [marker, setMarker] = useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    })

    useEffect(() => {
        setMarker({
            lat: markerPosition.lat,
            lng: markerPosition.lng,
        })
    }, [markerPosition])

    return (
        <>
            <MapContainer>
                {showMap ? (
                    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                        <MapView center={center} zoom={zoom}>
                            {marker && <Marker position={marker} />}
                        </MapView>
                    </Wrapper>
                ) : (
                    <MapSkeleton>Ubicacion aún no solicitada</MapSkeleton>
                )}
            </MapContainer>
        </>
    )
}

export default MapCard

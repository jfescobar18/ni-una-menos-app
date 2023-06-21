import { MapContainer } from "./styledComponent"
import { Wrapper } from "@googlemaps/react-wrapper"
import MapView from "./MapView"

const MapCard = () => {
    const center = { lat: 19.3476228, lng: -99.275614 }
    const position = { lat: 19.3476228, lng: -99.275614 }
    const zoom = 15

    return (
        <>
            <MapContainer>
                <Wrapper apiKey={"AIzaSyCthUx0-Y6uSgZ5ts2JvsS9HtL9IEh8wwU"}>
                    <MapView
                        center={center}
                        zoom={zoom}
                        markerList={[position]}
                    />
                </Wrapper>
            </MapContainer>
        </>
    )
}

export default MapCard

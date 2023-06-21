import { ReactNode, useEffect, useRef } from "react"
import { MapContainer } from "./styledComponent"
import { Wrapper } from "@googlemaps/react-wrapper"
import React from "react"

const MapCard = () => {
    const center = { lat: 19.3476228, lng: -99.275614 }
    const position = { lat: 19.3476228, lng: -99.275614 }
    const zoom = 10

    return (
        <>
            <MapContainer>
                <Wrapper apiKey={"AIzaSyCthUx0-Y6uSgZ5ts2JvsS9HtL9IEh8wwU"}>
                    <MyMapComponent center={center} zoom={zoom}>
                        <Marker position={position} />
                    </MyMapComponent>
                </Wrapper>
            </MapContainer>
        </>
    )
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>()

    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker())
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null)
            }
        }
    }, [marker])

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options)
        }
    }, [marker, options])

    return null
}

function MyMapComponent({
    center,
    zoom,
    children,
}: {
    center: google.maps.LatLngLiteral
    zoom: number
    children: ReactNode
}) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        new window.google.maps.Map(ref.current!, {
            center,
            zoom,
        })
    })

    return (
        <>
            <div ref={ref} id="map" />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    console.log(child)

                    return React.cloneElement(child, true)
                }
            })}
        </>
    )
}

export default MapCard

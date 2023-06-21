import { useEffect, useRef } from "react"
import { MarkerClusterer } from "@googlemaps/markerclusterer"
import icon from "../../assets/customMarker.png"
import { GoogleMapsMarker } from "../../types/GoogleMapsMarker"

interface MapViewProps {
    center: google.maps.LatLngLiteral
    zoom: number
    markerList: GoogleMapsMarker[]
}

const MapView = ({ center, zoom, markerList }: MapViewProps) => {
    const ref = useRef<HTMLDivElement>(null)
    let googleMap: google.maps.Map | null | undefined = null

    useEffect(() => {
        try {
            const initGoogleMap = () => {
                return new window.google.maps.Map(ref.current!, {
                    center: center,
                    zoom: zoom,
                })
            }

            const createMarker = (markerObj: GoogleMapsMarker) =>
                new window.google.maps.Marker({
                    position: {
                        lat: markerObj.lat,
                        lng: markerObj.lng,
                    },
                    map: googleMap,
                    icon: {
                        url: icon,
                        scaledSize: new window.google.maps.Size(30, 40),
                    },
                })

            googleMap = initGoogleMap()

            const markers = markerList.map((x) => {
                return createMarker(x)
            })

            new MarkerClusterer({ map: googleMap, markers: markers })
        } catch (e) {
            console.log("maps", e)
        }
    })

    return (
        <>
            <div ref={ref} id="map" />
        </>
    )
}

export default MapView
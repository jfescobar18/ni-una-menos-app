import { useEffect, useRef } from "react"
import { MarkerClusterer } from "@googlemaps/markerclusterer"
import icon from "../../assets/customMarker.png"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"

interface MapViewProps {
    markerList: GoogleMapsPosition[]
    center: google.maps.LatLngLiteral
    zoom: number
}

const MapView = ({ center, markerList, zoom }: MapViewProps) => {
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

            const createMarker = (markerObj: GoogleMapsPosition) => {
                return new window.google.maps.Marker({
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
            }

            googleMap = initGoogleMap()

            const markers = markerList.map((x) => {
                return createMarker(x)
            })

            new MarkerClusterer({ map: googleMap, markers: markers })
        } catch (e) {
            console.log("maps", e)
        }
    }, [markerList])

    return (
        <>
            <div ref={ref} id="map" />
        </>
    )
}

export default MapView

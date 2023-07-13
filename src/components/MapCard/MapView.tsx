import { useEffect, useRef, useState } from "react"
import { MarkerClusterer } from "@googlemaps/markerclusterer"
import icon from "../../assets/customMarker.png"
import { GoogleMapsPosition } from "../../types/GoogleMapsMarker"

interface MapViewProps {
    markerList: GoogleMapsPosition[]
    center: google.maps.LatLngLiteral
    zoom: number
}

const MapView = ({ markerList, center, zoom }: MapViewProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [googleMap, setGoogleMap] = useState<
        google.maps.Map | null | undefined
    >(null)

    const createMap = new Promise((resolve, reject) => {
        try {
            if (ref.current && !googleMap) {
                setGoogleMap(
                    new window.google.maps.Map(ref.current, {
                        center: center,
                        zoom: zoom,
                    })
                )
            }

            resolve(googleMap)
        } catch (error) {
            reject(error)
        }
    })

    useEffect(() => {
        try {
            createMap.then(() => {
                if (googleMap) {
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

                    const markers = markerList.map((x) => {
                        return createMarker(x)
                    })

                    new MarkerClusterer({ map: googleMap, markers: markers })

                    googleMap?.setCenter({
                        lat: markerList[0].lat,
                        lng: markerList[0].lng,
                    })
                }
            })
        } catch (e) {
            console.error("maps", e)
        }
    }, [markerList])

    return (
        <>
            <div ref={ref} id="map" />
        </>
    )
}

export default MapView

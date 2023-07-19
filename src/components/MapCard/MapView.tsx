import {
    Children,
    isValidElement,
    useEffect,
    useRef,
    useState,
    cloneElement,
    ReactNode,
} from "react"
import icon from "../../assets/customMarker.png"

interface MapViewProps {
    center: google.maps.LatLngLiteral
    zoom: number
    children: ReactNode
}

const MapView = ({ center, zoom, children }: MapViewProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [googleMap, setGoogleMap] = useState<
        google.maps.Map | null | undefined
    >(null)

    useEffect(() => {
        if (ref.current && !googleMap) {
            setGoogleMap(
                new window.google.maps.Map(ref.current, {
                    center: center,
                    zoom: zoom,
                })
            )
        }
    }, [ref, googleMap])

    useEffect(() => {
        googleMap?.setCenter({
            lat: center.lat,
            lng: center.lng,
        })
    }, [center])

    return (
        <>
            <div ref={ref} id="map" />
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    // @ts-ignore
                    return cloneElement(child, { map: googleMap })
                }
            })}
        </>
    )
}

export const Marker = (options: google.maps.MarkerOptions) => {
    const [marker, setMarker] = useState<google.maps.Marker>()

    useEffect(() => {
        if (!marker) {
            setMarker(
                new google.maps.Marker({
                    icon: {
                        url: icon,
                        scaledSize: new window.google.maps.Size(30, 40),
                    },
                })
            )
        }

        return () => {
            if (marker) {
                marker.setMap(null)
            }
        }
    }, [marker])

    useEffect(() => {
        if (marker) {
            marker.setOptions(options)
        }
    }, [marker, options])

    return null
}

export default MapView

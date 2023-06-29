import { GoogleMapsPosition } from "../types/GoogleMapsMarker"

const convertCoordinatesToAddress = (
    coordinates: GoogleMapsPosition
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const geocoder = new window.google.maps.Geocoder()
        const latLng = new window.google.maps.LatLng(
            coordinates.lat,
            coordinates.lng
        )

        try {
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === "OK" && results && results[0]) {
                    const direction = results[0].formatted_address
                    resolve(direction)
                } else {
                    reject(new Error(status))
                }
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    })
}

export const parseGoogleCoordinates = async (
    message: string
): Promise<{
    coordinates: GoogleMapsPosition
    direction: string
}> => {
    const formattedMessage = message.replace(/\s/g, "")
    const [lat, lng] = formattedMessage.split(",")
    const coordinates: GoogleMapsPosition = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
    }

    const direction: string = await convertCoordinatesToAddress(coordinates)

    return { coordinates, direction }
}

export const parseSOS = (message: string): string | null => {
    if (message === "null") {
        return null
    } else {
        const date = new Date(message)
        const formatOptions: Intl.DateTimeFormatOptions = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }

        const SOSDateTime = date.toLocaleString("es-ES", formatOptions)

        return SOSDateTime
    }
}

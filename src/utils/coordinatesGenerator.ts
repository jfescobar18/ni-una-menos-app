import { GoogleMapsPosition } from "../types/GoogleMapsMarker"

const generateNextCoordinate = (
    start: GoogleMapsPosition,
    end: GoogleMapsPosition,
    numPoints: number
): GoogleMapsPosition[] => {
    const latDiff: number = (end.lat - start.lat) / (numPoints + 1)
    const lngDiff: number = (end.lng - start.lng) / (numPoints + 1)

    const coordinates: GoogleMapsPosition[] = []

    for (let i = 1; i <= numPoints; i++) {
        const lat: number = parseFloat((start.lat + latDiff * i).toFixed(6))
        const lng: number = parseFloat((start.lng + lngDiff * i).toFixed(6))
        coordinates.push({ lat, lng })
    }

    coordinates.push(end)

    return coordinates
}

export const coordinatesGenerator = async function* (
    start: GoogleMapsPosition,
    end: GoogleMapsPosition,
    numPoints: number
): AsyncGenerator<GoogleMapsPosition> {
    const coordinates = generateNextCoordinate(start, end, numPoints)

    for (const coordinate of coordinates) {
        yield coordinate
        await new Promise<void>((resolve) => setTimeout(resolve, 2000))
    }
}

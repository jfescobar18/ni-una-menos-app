// Styled Components
import { InfoContainer, StyledField } from "./styledComponents"

interface InfoCardProps {
    name: string
    lastLocation: string
    SOSTime: string | null
}

export const InfoCard = ({ name, lastLocation, SOSTime }: InfoCardProps) => {
    return (
        <>
            <InfoContainer>
                <StyledField>
                    <span>Nombre: </span>
                    <span>{name}</span>
                </StyledField>

                <StyledField>
                    <span>Última ubicación: </span>
                    <span>{lastLocation}</span>
                </StyledField>

                <StyledField>
                    <span>Hora de SOS: </span>
                    <span>{SOSTime}</span>
                </StyledField>
            </InfoContainer>
        </>
    )
}

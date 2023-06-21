import { InfoContainer, StyledField } from "./styledComponents"

export interface iInfoCard {
    name: string
    lastLocation: string
    SOSTime: string
}

export const InfoCard = ({ name, lastLocation, SOSTime }: iInfoCard) => {
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

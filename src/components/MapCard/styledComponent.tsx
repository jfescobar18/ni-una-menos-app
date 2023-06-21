import styled from "styled-components"

export const MapContainer = styled.div`
    margin-top: 30px;
    background-color: #f0f8ff;
    width: 80%;
    height: 300px;
    border-radius: 7px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.75);

    #map {
        width: 100%;
        height: 100%;
    }
`

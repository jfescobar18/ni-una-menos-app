// Libs
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
export const MapSkeleton = styled.span`
    height: 300px;
    width: 100%;
    display: block;
    background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(172, 172, 172, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
        ),
        lightgray;
    background-repeat: repeat-y;
    background-size: 500px 200px;
    background-position: 0 0;
    animation: shine 2s infinite ease;
    color: #000;
    text-align: center;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes shine {
        to {
            background-position: 100% 0, 0 0;
        }
    }
`

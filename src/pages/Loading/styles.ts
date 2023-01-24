import styled, { keyframes } from "styled-components"
import BackgroundImage from '../../assets/background-linear.png'

export const LoadingContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover; 
`

export const PhotoLoading = styled.img`
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    box-shadow: 0px 0px 8px 2px ${props => props.theme["gray-500"]};
    outline: 6px solid ${props => props.theme["orange-400"]};

    @media (min-width: 320px) and (max-width: 480px) { 
        outline: 0px solid ${props => props.theme["orange-400"]};
    }
`

export const swivelChair = keyframes`
    from {
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 1;
    }

    30% {
        transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
        animation-timing-function: ease-in;
    }

    50% {
        transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
        opacity: 1;
    }

    70% {
        transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    to {
        transform: perspective(400px);
    }
`

export const TitleLoading = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: ${props => props.theme["gray-400"]};

    padding: 2.5rem 0;

    animation: ${swivelChair} 3s infinite;
`
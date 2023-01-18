import styled from "styled-components"
import { keyframes } from 'styled-components'

const animateLoader = keyframes`
    0% {
        transform: scale(1);
    }

    50%,
    75% {
        transform: scale(2.5);
    }

    80%,
    100% {
        opacity: 0;
    }
`

export const LoaderContainer = styled.div`
    width: 16em;
    display: flex;
    justify-content: space-evenly;
`

export const Circle = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;

    :nth-child(1) {
        background-color: #FFCE07;
    }
    :nth-child(2) {
        background-color: #F2B705;
    }
    :nth-child(3) {
        background-color: #F29F05;
    }
    :nth-child(4) {
        background-color: #F27405;
    }
    :nth-child(5) {
        background-color: #F25D27;
    }
    ::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        opacity: 0.5;
        animation: ${animateLoader} 3s ease-out infinite;
    }

    :nth-child(1)::before {
        background-color: #FFCE07;
    }
    :nth-child(2)::before {
        background-color: #F2B705;
        animation-delay: 0.2s;
    }
    :nth-child(3)::before {
        background-color: #F29F05;
        animation-delay: 0.4s;
    }
    :nth-child(4)::before {
        background-color: #F27405;
        animation-delay: 0.6s;
    }
    :nth-child(5)::before {
        background-color: #F25D27;
        animation-delay: 0.8s;
    }
`
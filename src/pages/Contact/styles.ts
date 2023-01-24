import styled from "styled-components"
import BackgroundImage from '../../assets/background-linear.png'

export const ContactContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover; 

    padding-bottom: 10rem;

    @media (min-width: 320px) and (max-width: 480px) { 
        padding-bottom: 5rem;
    }
`

export const ContactMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    top: 3rem;

    h1 {
        font-size: 4rem;
        font-weight: 700;
        color: ${props => props.theme["gray-500"]};
    }

    p {
        font-size: 2.25rem;
        color: ${props => props.theme["gray-400"]};
        margin-bottom: 2.625rem;
    }

    @media (min-width: 320px) and (max-width: 480px) { 
        padding: 1rem;
        text-align: center;

        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.75rem;
            margin-bottom: 2rem;
        }
    }
`

export const PhotoContact = styled.img`
    width: 22.5rem;
    height: 22.5rem;
    margin-bottom: 3.875rem;
    border-radius: 50%;
    box-shadow: 0px 0px 8px 2px ${props => props.theme["gray-500"]};

    @media (min-width: 320px) and (max-width: 480px) { 
        width: 16rem;
        height: 16rem;
    }
`

export const Buttons = styled.section`
    display: flex;
    justify-content: center;
    gap: 3rem;

    margin-top: 2rem;
    @media (min-width: 320px) and (max-width: 480px) { 
        flex-direction: column;
        gap: 1.5rem;
    }
`
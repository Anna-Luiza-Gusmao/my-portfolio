import styled from "styled-components"

export const ButtonFollowMeContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    background-color: transparent;
    border: 1px solid ${props => props.theme["gray-500"]};
    padding: 0.875rem 3rem;
    transition: 0.2s;
    border-radius: 6px;

    &:hover {
        img {
            opacity: 1;
        }
        p {
            padding-right: 1rem;
            color: ${props => props.theme["white-100"]};
        }
        background-color: ${props => props.theme["gray-500"]};
    }

    p {
        transition: .2s;
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 0 !important;
        color: ${props => props.theme["gray-500"]}; 
    }

    img {
        opacity: 0;
        transition: .2s;
        height: 1.5rem;
    }

    @media (min-width: 320px) and (max-width: 480px) { 
        p {
            font-size: 1.25rem;
        }
    }
`
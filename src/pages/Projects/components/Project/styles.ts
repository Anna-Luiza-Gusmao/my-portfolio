import styled from "styled-components"

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => props.theme["orange-400"]};
    border-radius: 8px;
    padding: 0.875rem 1.875rem;

    img {
        width: 16.25rem;
        height: 10rem;
        border-radius: 8px;
        margin-top: -2.5rem;
        margin-bottom: 0.625rem;
        object-fit: cover;
    }

    @media (min-width: 320px) and (max-width: 480px) { 
        padding: 0.75rem 1.75rem;
    }
`

export const ProjectTitle = styled.p`
    font-size: 1.75rem;
    font-weight: 600;
    color: ${props => props.theme["gray-700"]};
`

export const ProjectLanguage = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${props => props.theme["gray-600"]};
    padding-bottom: 1.125rem;
`
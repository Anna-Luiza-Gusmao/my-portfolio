import styled from "styled-components"

export const AboutMeContainer = styled.main`
    padding: 0 4.5rem;

    h1 {
        font-size: 3rem;
        font-height: 700;
        padding-top: 3rem;
        color: ${props => props.theme["gray-500"]};
    }
`

export const FormationContainer = styled.section`
    display: flex;
    justify-content: center;
    padding: 3.5rem 21.5rem;
    gap: 8.5rem;

    img {
        margin-bottom: 1.5rem;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1.5rem;
        text-align: center;
        color: ${props => props.theme["gray-700"]};
    }
`
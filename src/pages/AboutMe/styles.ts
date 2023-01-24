import styled from "styled-components"

export const AboutMeContainer = styled.main`
    padding: 0 4.5rem;
    @media (min-width: 320px) and (max-width: 480px) { 
        padding: 0 1.5rem;
    }

    h1 {
        font-size: 3rem;
        font-height: 700;
        padding-top: 3rem;
        color: ${props => props.theme["gray-500"]};

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2.5rem;
        }
    }
`

export const FormationContainer = styled.section`
    display: flex;
    justify-content: center;
    padding: 8rem 21.5rem;
    gap: 8.5rem;

    @media (min-width: 320px) and (max-width: 480px) { 
        flex-direction: column;
        padding: 4rem 0;
        gap: 4rem;
    }

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

export const Formation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
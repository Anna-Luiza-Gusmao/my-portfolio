import styled from "styled-components"

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;

    footer {
        right: 0;
        position: absolute;
        margin: 3rem 0;

        @media (min-width: 320px) and (max-width: 480px) {
            right: -50px;
            margin: 2rem 0;
        }
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;

    img {
        transition: box-shadow 0.3s;
        
        &:hover{
            cursor: pointer;
            box-shadow: 0 4px 14px 0 rgba(51, 47, 46, 0.25);
        }
    }
`

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    h1 {
        padding: 1rem 0;
        color: ${props => props.theme["gray-700"]};
        font-size: 4rem;

        :nth-child(2) {
            font-size: 3rem;
        }

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2.5rem;
            padding: 0.5rem 0;

            :nth-child(2) {
                font-size: 1.75rem;
            }
        }
    }

    h2 {
        font-size: 4rem;
        padding: 4.5rem 0;
        color: ${props => props.theme["orange-500"]};

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 3rem;
            padding: 4rem 0;
            text-align: center;
        }
    }
`
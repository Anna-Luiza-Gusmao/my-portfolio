import styled from "styled-components"

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
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
    }

    h2 {
        font-size: 4rem;
        padding: 4.5rem 0;
        color: ${props => props.theme["orange-500"]};
    }
`
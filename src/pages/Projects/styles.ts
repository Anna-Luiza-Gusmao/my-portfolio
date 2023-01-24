import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 4.5rem 0;

    @media (min-width: 320px) and (max-width: 480px) { 
        padding: 3.5rem 0 2rem 0;
    }
`

const DividerBase = styled.div`
    width: 28.75rem;
    height: 0.5rem;
    background: ${props => props.theme["orange-500"]};
    border-radius: 8px;

    margin: 1.375rem 0;

    @media (min-width: 320px) and (max-width: 480px) { 
        width: 10rem;
    }
`

export const FirstDivider = styled(DividerBase)`
    margin-left: -26rem;

    @media (min-width: 320px) and (max-width: 480px) { 
        margin-left: -10rem;
    }
`

export const SecondDivider = styled(DividerBase)`
    margin-right: -26rem;

    @media (min-width: 320px) and (max-width: 480px) { 
        margin-right: -10rem;
    }
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 4rem;

    @media (min-width: 320px) and (max-width: 480px) { 
        font-size: 2.5rem;
        text-align: center;
    }
`

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const AllProjects = styled.section`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 3.5rem;
    column-gap: 6.125rem;

    padding-top: 3.75rem;

    @media (min-width: 320px) and (max-width: 480px) { 
        grid-template-columns: 1fr;
    }
`
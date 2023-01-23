import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 4.5rem 0;
`

const DividerBase = styled.div`
    width: 28.75rem;
    height: 0.5rem;
    background: ${props => props.theme["orange-500"]};
    border-radius: 8px;

    margin: 1.375rem 0;
`

export const FirstDivider = styled(DividerBase)`
    margin-left: -26rem;
`

export const SecondDivider = styled(DividerBase)`
    margin-right: -26rem;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 4rem;
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
`
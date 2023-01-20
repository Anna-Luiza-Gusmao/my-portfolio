import styled from "styled-components"

export const StacksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 11.5rem 0;
    margin-bottom: 4.75rem;
`

export const AllStacks = styled.section`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3.25rem;
    column-gap: 2.75rem;
`

export const OrangeStack = styled.div`
    width: 230px;
    height: 53px;
    background: ${props => props.theme["orange-400"]};
    border-radius: 38px;
`

export const GrayStack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 198px;
    height: 50px;
    margin-top: -4rem;

    background: ${props => props.theme["gray-500"]};
    border-radius: 18px;
    border: 1px solid ${props => props.theme["orange-400"]};

    color: ${props => props.theme["orange-400"]};
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
`
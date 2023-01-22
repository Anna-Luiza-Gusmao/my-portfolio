import styled from "styled-components"

export const StacksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 2.5rem;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding: 3rem 0;

    h2 {
        color: ${props => props.theme["orange-400"]};
        font-weight: 800;
        font-size: 5.375rem;
    }
    h3 {
        color: rgba(51, 47, 46, 0.8);
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 49px;
        letter-spacing: 0.8em;

        padding-left: 1.25rem;
        margin-top: -5rem;
    }
`

export const AllStacks = styled.section`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3.25rem;
    column-gap: 2.75rem;

    padding-top: 4rem;
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
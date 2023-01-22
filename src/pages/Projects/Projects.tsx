import { ButtonNextPage } from "../../components/ButtonNextPage"
import { FirstDivider, Header, SecondDivider, Title } from "./styles"

export function Projects () {
    return (
        <>
            <Header>
                <FirstDivider />
                <Title>Discover some of my projects</Title>
                <SecondDivider />
            </Header>
            <footer style={{'right': '0', 'position': 'absolute', 'margin': '3rem 0'}}>
                <ButtonNextPage path="projects" />
            </footer>
        </>
    )
}
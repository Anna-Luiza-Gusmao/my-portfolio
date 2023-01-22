import { ButtonNextPage } from "../../components/ButtonNextPage"
import { ButtonViewGithub } from "./components/ButtonViewGithub"
import { FirstDivider, Header, SecondDivider, Title } from "./styles"

export function Projects () {
    return (
        <>
            <Header>
                <FirstDivider />
                <Title>Discover some of my projects</Title>
                <SecondDivider />
            </Header>
            <ButtonViewGithub />
            <footer style={{'right': '0', 'position': 'absolute', 'margin': '3rem 0'}}>
                <ButtonNextPage path="projects" />
            </footer>
        </>
    )
}
import { useEffect } from "react"
import { ButtonNextPage } from "../../components/ButtonNextPage"
import { Project } from "./components/Project"
import { AllProjects, FirstDivider, Header, ProjectsContainer, SecondDivider, Title } from "./styles"

export function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Coffee Delivery',
            language: 'React | Typescript',
            link: 'https://github.com/Anna-Luiza-Gusmao/coffee-delivery'
        },
        {
            id: 2,
            title: 'Github Blog',
            language: 'React | Typescript',
            link: 'https://github.com/Anna-Luiza-Gusmao/github-blog'
        },
        {
            id: 3,
            title: 'Dt Money',
            language: 'React | Typescript',
            link: 'https://github.com/Anna-Luiza-Gusmao/dt-money'
        },
        {
            id: 4,
            title: 'To Do List',
            language: 'React | Typescript',
            link: 'https://github.com/Anna-Luiza-Gusmao/to-do-list'
        },
        {
            id: 5,
            title: 'Ignite Feed',
            language: 'React | Typescript',
            link: 'https://github.com/Anna-Luiza-Gusmao/ignite-feed-ts'
        },
        {
            id: 6,
            title: 'Dynamic Card',
            language: 'Javascript',
            link: 'https://github.com/Anna-Luiza-Gusmao/dynamic-card'
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header>
                <FirstDivider />
                <Title>Discover some of my projects</Title>
                <SecondDivider />
            </Header>
            <ProjectsContainer>
                <AllProjects>
                    {
                        projects.map((item) =>
                            <Project
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                language={item.language}
                                link={item.link}
                            />
                        )
                    }
                </AllProjects>
            </ProjectsContainer>
            <footer style={{ 'right': '0', 'position': 'absolute', 'margin': '3rem 0' }}>
                <ButtonNextPage path="contact" />
            </footer>
        </>
    )
}
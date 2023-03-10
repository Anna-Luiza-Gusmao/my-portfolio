import { ButtonViewGithub } from "../ButtonViewGithub"
import { ProjectContainer, ProjectLanguage, ProjectTitle } from "./styles"

import path1 from '../../../../assets/projects/coffee-delivery.png'
import path2 from '../../../../assets/projects/github-blog.png'
import path3 from '../../../../assets/projects/dt-money.png'
import path4 from '../../../../assets/projects/to-do-list.png'
import path5 from '../../../../assets/projects/ignite-feed.png'
import path6 from '../../../../assets/projects/dynamic-car.png'

interface ProjectProps {
    id: number
    title: string,
    language: string,
    link: string
}

export function Project ({id, title, language, link}: ProjectProps) {
    const paths = [
        path1,
        path2,
        path3,
        path4,
        path5,
        path6
    ]

    return (
        <ProjectContainer>
            <img src={paths[id - 1]} />
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectLanguage>{language}</ProjectLanguage>
            <ButtonViewGithub path={link}/>
        </ProjectContainer>
    )
}
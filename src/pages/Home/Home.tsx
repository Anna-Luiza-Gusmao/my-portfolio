import { Header, HomeContainer, TextContainer } from "./styles"
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg'
import GithubIcon from '../../assets/icons/github-icon.svg'
import { ButtonNextPage } from "../../components/ButtonNextPage"
import { Carousel } from "./components/Carrousel"

export function Home () {
    const navigateFromLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/anna-luiza-gusm%C3%A3o-b248b3216/'
    }
    const navigateFromGithub = () => {
        window.location.href = 'https://github.com/Anna-Luiza-Gusmao'
    }

    return (
        <HomeContainer>
            <Header>
                <img src={LinkedinIcon} onClick={navigateFromLinkedin} />
                <img src={GithubIcon} onClick={navigateFromGithub} />
            </Header>
            <TextContainer>
                <h1>Hi!</h1>
                <h1>I am Anna Luiza</h1>
                <h2>| FRONTEND DEVELOPER |</h2>
            </TextContainer>
            <Carousel />
            <footer style={{'right': '0', 'position': 'absolute', 'margin': '3rem 0'}}>
                <ButtonNextPage path="about-me" />
            </footer>
        </HomeContainer>
    )
}
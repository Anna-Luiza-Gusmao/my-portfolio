import { ButtonFollowMeContainer } from "./styles"
import Github from '../../../../assets/icons/github-white-icon.svg'
import Linkedin from '../../../../assets/icons/linkedin-white-icon.svg'

interface ButtonFollowMeProps {
    text: string,
    option: number
}

export function ButtonFollowMe({ text, option }: ButtonFollowMeProps) {
    const paths = [
        Github,
        Linkedin
    ]

    function navigate (option: number) {
        if(option === 0){
            window.location.href = 'https://github.com/Anna-Luiza-Gusmao'
        }else{
            window.location.href = 'https://www.linkedin.com/in/anna-luiza-gusm%C3%A3o-b248b3216/'
        }
    }

    return (
        <ButtonFollowMeContainer onClick={() => navigate(option)}>
            <p>{text}</p>
            <img src={paths[option]} />
        </ButtonFollowMeContainer>
    )
}
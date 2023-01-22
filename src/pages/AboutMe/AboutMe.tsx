import { ButtonNextPage } from "../../components/ButtonNextPage"
import { Stacks } from "./components/Stacks"
import { AboutMeContainer, Formation, FormationContainer } from "./styles"

import FormationOne from '../../assets/formations/f1.svg'
import FormationTwo from '../../assets/formations/f2.svg'
import FormationThree from '../../assets/formations/f3.svg'

export function AboutMe () {
    return (
        <AboutMeContainer>
            <h1>About me...</h1>
            <FormationContainer>
                <Formation>
                    <img src={FormationOne} />
                    <p>Systems Engineering Academic</p>
                </Formation>
                <Formation>
                    <img src={FormationTwo} />
                    <p style={{'visibility': 'hidden'}}>hidden</p>
                    <p>IT technician</p>
                </Formation>
                <Formation>
                    <img src={FormationThree} />
                    <p>FrontEnd Developer in Estúdio Haus</p>
                </Formation>
            </FormationContainer>
            <Stacks />
            <footer style={{'right': '0', 'position': 'absolute', 'margin': '3rem 0'}}>
                <ButtonNextPage path="projects" />
            </footer>
        </AboutMeContainer>
    )
}
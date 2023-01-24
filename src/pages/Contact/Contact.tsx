import { ButtonBackHome } from "./components/ButtonBackHome"
import { Buttons, ContactContainer, ContactMain, PhotoContact } from "./styles"
import MyPhoto from '../../assets/my-photo.png'
import { ButtonFollowMe } from "./components/ButtonFollowMe"
import { useEffect } from "react"

export function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <ContactContainer>
            <ButtonBackHome />

            <ContactMain>
                <PhotoContact src={MyPhoto} />

                <h1>|  DID YOU LIKE MY WORK?  |</h1>
                <p>Follow me on social networks</p>

                <Buttons>
                    <ButtonFollowMe text="Follow me in GitHub" option={0} />
                    <ButtonFollowMe text="Follow me in Linkedin" option={1} />
                </Buttons>
            </ContactMain>
        </ContactContainer>
    )
}
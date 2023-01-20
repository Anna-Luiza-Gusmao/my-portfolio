import { OrangeStack, GrayStack, StacksContainer, AllStacks } from "./styles"

export function Stacks() {
    const stacks = [
        'Bootstrap',
        'Insomnia',
        'React Router',
        'React Hooks',
        'Styled Components',
        'Figma',
        'Json Server',
        'MUI',
        'Git'
    ]


    return (
        <StacksContainer>
            <AllStacks>
                {
                    stacks.map((item) => (
                        <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
                            <OrangeStack />
                            <GrayStack>{item}</GrayStack>
                        </div>
                    ))
                }
            </AllStacks>
        </StacksContainer>
    )
} 
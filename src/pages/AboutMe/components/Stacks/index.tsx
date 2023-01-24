import { OrangeStack, GrayStack, StacksContainer, AllStacks, Title } from "./styles"

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
            <Title>
                <h2>MY STACKS</h2>
                <h3>MY STACKS</h3>
            </Title>
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
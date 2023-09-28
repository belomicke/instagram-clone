import { Container } from './AuthFormContainer.styles'

interface props {
    children: React.ReactNode
}

const AuthFormContainer = ({ children }: props) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default AuthFormContainer

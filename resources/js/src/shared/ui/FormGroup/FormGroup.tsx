import { Container, Label } from './FormGroup.styles'

interface props {
    label: string
    children: React.ReactNode
}

const FormGroup = ({ label, children }: props) => {
    return (
        <Container>
            <Label>{label}</Label>
            {children}
        </Container>
    )
}

export default FormGroup

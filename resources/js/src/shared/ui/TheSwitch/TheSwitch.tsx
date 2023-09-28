import { Action, Container } from './TheSwitch.styles'

interface props {
    value: boolean
    setValue: (value: boolean) => void
}

const TheSwitch = ({ value, setValue }: props) => {
    return (
        <Container active={value} onClick={() => setValue(!value)}>
            <Action active={value} />
        </Container>
    )
}

export default TheSwitch

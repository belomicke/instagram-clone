import { Container, Option } from './TheMenu.styles'

interface IOption {
    label: string
    variant?: 'info' | 'danger'
    onClick: () => void
}

interface props {
    options: IOption[]
}

const TheMenu = ({ options }: props) => {
    return (
        <Container>
            {options.map((option, index) => (
                <Option
                    variant={option.variant ?? 'info'}
                    onClick={option.onClick}
                    key={index}
                >
                    {option.label}
                </Option>
            ))}
        </Container>
    )
}

export default TheMenu

import { ButtonVariants } from '../../types'
import { LinkButton } from './LinkButton.styles'

interface props {
    text: string
    variant: ButtonVariants
}

const LinkButtonComponent = ({ text, ...props }: props) => {
    return (
        <LinkButton {...props}>{text}</LinkButton>
    )
}

export default LinkButtonComponent

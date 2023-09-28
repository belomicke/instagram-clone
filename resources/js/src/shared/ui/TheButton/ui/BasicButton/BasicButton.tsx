import { ButtonVariants } from '../../types'
import { BasicButton } from './BasicButton.styles'

interface props {
    text: string
    variant: ButtonVariants
    icon?: React.ReactNode
    disabled: boolean
}

const ButtonComponent = ({ text, icon, ...props }: props) => {
    return (
        <BasicButton {...props}>
            {icon ? icon : <></>}
            {text}
        </BasicButton>
    )
}

export default ButtonComponent

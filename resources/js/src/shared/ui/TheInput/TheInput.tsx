import { InputHTMLAttributes } from 'react'
import { InputContainer, Input } from './TheInput.styles'

interface props extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    password?: boolean
    required?: boolean
}

const TheInput = ({ password = false, ...props }: props) => {
    return (
        <InputContainer>
            <Input
                type={password ? 'password' : 'text'}
                {...props}
            />
        </InputContainer>
    )
}

export default TheInput

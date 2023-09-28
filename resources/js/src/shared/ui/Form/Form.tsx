import { HTMLAttributes } from 'react'
import { FormContainer } from './Form.styles'

interface props extends HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
}

const Form = ({ children, ...props }: props) => {
    return (
        <FormContainer {...props}>
            {children}
        </FormContainer>
    )
}

export default Form

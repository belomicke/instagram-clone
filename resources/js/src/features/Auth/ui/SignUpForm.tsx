import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthFormContainer, AuthFormHeader, AuthFormFooter } from '@/entities/Auth/ui/AuthForm'
import FormGroup from '@/shared/ui/FormGroup'
import TheInput from '@/shared/ui/TheInput'
import TheButton from '@/shared/ui/TheButton'
import Form from '@/shared/ui/Form/Form'
import useSignUp from '@/features/Auth/hook/useSignUp'

const SignUpForm = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password_confirmation, setPasswordConfirmation] = useState<string>('')

    const { mutate: signUp } = useSignUp()

    const submit = async (e) => {
        e.preventDefault()
        await signUp({ username, email, password, password_confirmation })
    }

    return (
        <AuthFormContainer>
            <AuthFormHeader />
            <Form onSubmit={submit}>
                <FormGroup label="Имя пользователя">
                    <TheInput
                        value={username}
                        onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
                        minLength={4}
                        maxLength={255}
                        required
                    />
                </FormGroup>
                <FormGroup label="Адрес электронной почты">
                    <TheInput
                        value={email}
                        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                        type="email"
                        required
                    />
                </FormGroup>
                <FormGroup label="Пароль">
                    <TheInput
                        value={password}
                        onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                        required
                        password
                    />
                </FormGroup>
                <FormGroup label="Подтверждение пароля">
                    <TheInput
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation((e.target as HTMLInputElement).value)}
                        required
                        password
                    />
                </FormGroup>
                <TheButton
                    text="Зарегистрироваться"
                    block
                />
            </Form>
            <AuthFormFooter>Уже есть аккаунт? <NavLink to="/login">Войти</NavLink></AuthFormFooter>
        </AuthFormContainer>
    )
}

export default SignUpForm

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useLogin from '@/features/Auth/hook/useLogin'
import { AuthFormContainer, AuthFormFooter, AuthFormHeader } from '@/entities/Auth/ui/AuthForm'
import TheInput from '@/shared/ui/TheInput'
import TheButton from '@/shared/ui/TheButton'
import Form from '@/shared/ui/Form'
import FormGroup from '@/shared/ui/FormGroup'
import TheAlert from '@/shared/ui/TheAlert'

const LoginForm = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [error, setError] = useState<string>('')

    const { mutate: login } = useLogin()

    const submit = async (e) => {
        e.preventDefault()

        setError('')
        const result = await login({ username, password })

        if (!result.success) {
            setError(result.data.message)
        }
    }

    return (
        <AuthFormContainer>
            <AuthFormHeader />
            <Form onSubmit={submit}>
                {error.length !== 0 &&
                    <TheAlert
                        title={error}
                        type="error"
                    />
                }
                <FormGroup label="Имя пользователя">
                    <TheInput
                        value={username}
                        onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
                        min={4}
                        max={255}
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
                <TheButton
                    text="Войти"
                    block
                />
            </Form>
            <AuthFormFooter>Ещё нет аккаунта? <NavLink to="/signup">Зарегистрироваться</NavLink></AuthFormFooter>
        </AuthFormContainer>
    )
}

export default LoginForm

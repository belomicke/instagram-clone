import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AvatarChanger from './AvatarChanger'
import SettingsSection from './SettingsSection'
import useEditCurrentUser from '@/features/Auth/hook/useEditCurrentUser'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import TheInput from '@/shared/ui/TheInput'
import TheButton from '@/shared/ui/TheButton'
import PageWrapper from '@/shared/ui/PageWrapper'
import {
    Container,
    Subtitle,
    InputBlock,
    Label,
    Biography,
    Footer,
} from './SettingsPage.styles'

const SettingsPage = () => {
    const { data: currentUser } = useCurrentUser()

    const [username, setUsername] = useState<string>(currentUser.username)
    const [name, setName] = useState<string>(currentUser.name)
    const [biography, setBiography] = useState<string>(currentUser.biography)

    const { mutate: editUser } = useEditCurrentUser()
    const navigate = useNavigate()

    const submit = async () => {
        await editUser({
            username,
            name,
            biography
        })
        navigate(`/user/${username}`)
    }

    const formIsValid = useMemo(() => {
        if (username !== currentUser.username) return true
        if (name !== currentUser.name) return true
        if (biography !== currentUser.biography) return true

        return false
    }, [username, name, biography])

    return (
        <PageWrapper>
            <Container>
                <SettingsSection title="Фотография профиля">
                    <AvatarChanger />
                </SettingsSection>
                <SettingsSection
                    title="Основные настройки"
                    subtitle="Эта информация появится в вашем профиле."
                >
                    <InputBlock>
                        <Label>Имя пользователя</Label>
                        <TheInput
                            value={username}
                            onChange={(e) => setUsername(e.target.value.toLowerCase())}
                        />
                    </InputBlock>
                    <InputBlock>
                        <Label>Полное имя</Label>
                        <TheInput
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InputBlock>
                    <InputBlock>
                        <Label>О себе</Label>
                        <Biography
                            value={biography}
                            onChange={(e) => setBiography(e.target.value)}
                            maxLength={150}
                        />
                        <Subtitle>{biography.length} / 150</Subtitle>
                    </InputBlock>
                </SettingsSection>
                <Footer>
                    <TheButton
                        text="Обновить данные аккаунта"
                        disabled={!formIsValid}
                        onClick={() => submit()}
                    />
                </Footer>
            </Container>
        </PageWrapper>
    )
}

export default SettingsPage

import DeleteAvatarButton from './DeleteAvatarButton'
import ChangeAvatarButton from './ChangeAvatarButton'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import Avatar from '@/shared/ui/Avatar'
import { Container, Body, Title, Buttons, Subtitle } from './AvatarChanger.styles'

const AvatarChanger = () => {
    const { data: currentUser } = useCurrentUser()

    return (
        <Container>
            <Avatar
                src={currentUser.avatar}
                size={96}
            />
            <Body>
                <Title>Загрузить новый аватар</Title>
                <Buttons>
                    <ChangeAvatarButton />
                    <DeleteAvatarButton />
                </Buttons>
                <Subtitle>Максимально допустимый размер файла составляет 200 Кбайт.</Subtitle>
            </Body>
        </Container>
    )
}

export default AvatarChanger

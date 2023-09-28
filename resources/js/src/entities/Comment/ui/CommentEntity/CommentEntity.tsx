import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import getShortPublishDate from '@/shared/lib/helpers/getShortPublishDate'
import {
    AuthorAvatar,
    Body,
    Container,
    CreatedAt,
    Footer,
    Header,
    Text,
    Username
} from './CommentEntity.styles'

interface props {
    avatar: string
    username: string
    text: string
    created_at: string
}

const CommentEntity = ({ avatar, username, text, created_at }: props) => {
    const navigate = useNavigate()

    const date = useMemo(() => {
        return getShortPublishDate(created_at)
    }, [created_at])

    const goToAuthorProfile = (username) => {
        window.scrollTo(0, 0)
        navigate(`/user/${username}`)
    }

    return (
        <Container>
            <AuthorAvatar
                src={avatar}
                size={32}
                onClick={() => goToAuthorProfile(username)}
            />
            <Body>
                <Header>
                    <Username onClick={() => goToAuthorProfile(username)}>{username}</Username>
                </Header>
                <Text
                    text={text}
                />
                <Footer>
                    <CreatedAt>{date}</CreatedAt>
                </Footer>
            </Body>
        </Container>
    )
}

export default CommentEntity

import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Post from '@/shared/api/models/Post/Post'
import getShortPublishDate from '@/shared/lib/helpers/getShortPublishDate'
import User from '@/shared/api/models/User/User'
import {
    Container,
    AuthorAvatar,
    Info,
    Username,
    UsernameContainer,
    CreatedAt
} from './PostHeader.styles'

interface props {
    post: Post
    author: User
    optionsSlot: React.ReactNode
    followButtonSlot: React.ReactNode
    withDate?: boolean
}

const PostHeader = ({ post, author, followButtonSlot, optionsSlot, withDate = false }: props) => {
    const navigate = useNavigate()

    const date = useMemo(() => {
        return getShortPublishDate(post.created_at)
    }, [post.created_at])

    if (!author) return <></>

    const goToProfile = () => {
        window.scrollTo(0, 0)
        navigate(`/user/${author.username}`)
    }

    return (
        <Container>
            <AuthorAvatar
                src={author.avatar}
                size={40}
                onClick={() => goToProfile()}
            />
            <Info>
                <UsernameContainer>
                    <Username onClick={() => goToProfile()}>{author.username}</Username>
                </UsernameContainer>
                {followButtonSlot}
                {withDate &&
                    <>
                        •
                        <CreatedAt>{date}</CreatedAt>
                    </>
                }
            </Info>
            {optionsSlot}
        </Container>
    )
}

export default PostHeader

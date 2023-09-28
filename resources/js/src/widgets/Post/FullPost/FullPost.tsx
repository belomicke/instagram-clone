import { HTMLAttributes, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostHeaderFollowButton from '@/features/User/ui/PostHeaderFollowButton'
import PostOptions from '@/features/Post/ui/PostOptions'
import PostActions from '@/features/Post/ui/PostActions'
import PostLikersModal from '@/features/Feed/ui/PostLikersModal'
import PostLikeCount from '@/entities/Post/ui/PostLikeCount'
import useUserById from '@/entities/User/hook/useUserById'
import PostHeader from '@/entities/Post/ui/PostHeader'
import usePostById from '@/entities/Post/hooks/usePostById'
import MediaCarousel from '@/entities/Media/ui/MediaCarousel'
import CommentEntity from '@/entities/Comment/ui/CommentEntity'
import {
    Body,
    Container,
    Footer,
    Header,
    Sidebar
} from './FullPost.styles'

interface props extends HTMLAttributes<HTMLDivElement> {
    className?: string
    hideComments?: boolean
}

const FullPost = ({ className = '', hideComments = false, ...props }: props) => {
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

    const { data: post } = usePostById(id)
    const { data: author } = useUserById(post ? post.user_id : '')

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    if (!post) return <></>
    if (!author) return <></>

    return (
        <>
            <Container {...props} className={className}>
                <MediaCarousel
                    mediaList={post.media}
                    backgroundColor="var(--pg-background)"
                />
                <Sidebar>
                    <Header>
                        <PostHeader
                            post={post}
                            author={author}
                            optionsSlot={<PostOptions
                                post={post}
                                onDelete={() => navigate(-1)}
                            />}
                            followButtonSlot={<PostHeaderFollowButton user={post.author} />}
                        />
                    </Header>
                    <Body>
                        {post.description.length !== 0 &&
                            <CommentEntity
                                username={post.author.username}
                                text={post.description}
                                avatar={post.author.avatar}
                                created_at={post.created_at}
                            />
                        }
                    </Body>
                    <Footer>
                        <PostActions
                            post={post}
                            hideComments={hideComments}
                        />
                        <PostLikeCount
                            id={post.id}
                            onClick={() => setModalIsOpen(true)}
                        />
                    </Footer>
                </Sidebar>
            </Container>
            <PostLikersModal
                id={post.id}
                isActive={modalIsOpen}
                close={() => setModalIsOpen(false)}
            />
        </>
    )
}

export default FullPost

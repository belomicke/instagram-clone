import { useState } from 'react'
import PostHeaderFollowButton from '@/features/User/ui/PostHeaderFollowButton'
import PostOptions from '@/features/Post/ui/PostOptions'
import PostActions from '@/features/Post/ui/PostActions'
import PostLikersModal from '@/features/Feed/ui/PostLikersModal'
import PostLikeCount from '@/entities/Post/ui/PostLikeCount'
import usePostById from '@/entities/Post/hooks/usePostById'
import PostHeader from '@/entities/Post/ui/PostHeader'
import PostDescription from '@/entities/Post/ui/PostDescription'
import MediaCarousel from '@/entities/Media/ui/MediaCarousel'
import useUserById from '@/entities/User/hook/useUserById'
import { Container } from './PostFeedItem.styles'

interface props {
    id: string
}

const PostFeedItem = ({ id }: props) => {
    const { data: post } = usePostById(id)
    const { data: author } = useUserById(post.user_id)

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    if (!post) return <></>
    if (!author) return <></>

    return (
        <>
            <Container>
                <PostHeader
                    post={post}
                    author={author}
                    optionsSlot={<PostOptions post={post} />}
                    followButtonSlot={<PostHeaderFollowButton user={post.author} />}
                    withDate
                />
                <MediaCarousel mediaList={post.media} />
                <PostActions post={post} />
                <PostLikeCount
                    id={post.id}
                    onClick={() => setModalIsOpen(true)}
                />
                {post.description.length !== 0 &&
                    <PostDescription
                        description={post.description}
                        user={post.author}
                    />
                }
            </Container>
            <PostLikersModal
                id={post.id}
                isActive={modalIsOpen}
                close={() => setModalIsOpen(false)}
            />
        </>
    )
}

export default PostFeedItem

import { useLocation, useNavigate } from 'react-router-dom'
import useSavePost from '@/features/Post/hook/useSavePost'
import useLikePost from '@/entities/Post/hooks/useLikePost'
import BookmarkIcon from '@/shared/ui/Icon/icons/BookmarkIcon'
import HeartIcon from '@/shared/ui/Icon/icons/HeartIcon'
import Post from '@/shared/api/models/Post/Post'
import CommentsIcon from '@/shared/ui/Icon/icons/CommentsIcon'
import { Container, Block, Button } from './PostActions.styles'

interface props {
    post: Post
    hideComments?: boolean
}

const PostActions = ({ post, hideComments = false }: props) => {
    const { isSaved, saveHandler } = useSavePost(post)
    const { isLiked, likeHandler } = useLikePost(post)
    const navigate = useNavigate()
    const location = useLocation()

    const goToModalPost = () => {
        navigate(`/post/${post.id}`, {
            state: {
                backgroundLocation: location
            }
        })
    }

    return (
        <Container>
            <Block>
                <Button
                    active={isLiked}
                    active_color="var(--primary-red)"
                    onClick={() => likeHandler()}
                >
                    <HeartIcon filled={isLiked} />
                </Button>
                {hideComments === false &&
                    <Button
                        active={false}
                        active_color="var(--primary-text)"
                        onClick={() => goToModalPost()}
                    >
                        <CommentsIcon />
                    </Button>
                }
            </Block>
            <Block>
                <Button
                    active={isSaved}
                    active_color="var(--primary-text)"
                    onClick={() => saveHandler()}
                >
                    <BookmarkIcon filled={isSaved} />
                </Button>
            </Block>
        </Container>
    )
}

export default PostActions

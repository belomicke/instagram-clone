import usePostById from '@/entities/Post/hooks/usePostById'
import { Container, Counter } from './PostLikeCount.styles'

interface props {
    id: string
    onClick: () => void
}

const PostLikeCount = ({ id, onClick }: props) => {
    const { data: post } = usePostById(id)

    const clickHandler = () => {
        if (post.like_count > 0) onClick()
    }

    return (
        <Container>
            <Counter
                clickable={post.like_count > 0}
                onClick={() => clickHandler()}
            >
                {post.like_count} отметок &quot;Нравится&quot;
            </Counter>
        </Container>
    )
}

export default PostLikeCount

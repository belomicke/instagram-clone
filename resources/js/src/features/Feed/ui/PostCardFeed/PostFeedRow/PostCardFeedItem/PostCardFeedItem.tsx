import PostCard from '@/entities/Post/ui/PostCard'
import usePostById from '@/entities/Post/hooks/usePostById'

interface props {
    id: string
}

const PostCardFeedItem = ({ id }: props) => {
    const { data: post } = usePostById(id)

    return (
        <PostCard
            id={post.id}
            cover_url={post.media[0].url}
            media_count={post.media_count}
            like_count={post.like_count}
            with_overlay={!post.like_count_is_hidden}
        />
    )
}

export default PostCardFeedItem

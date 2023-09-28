import PostCardFeed from '@/features/Feed/ui/PostCardFeed'
import useTagPosts from '@/features/Feed/hook/useTagPosts'

interface props {
    tag: string
}

const TagPosts = ({ tag }: props) => {
    const { feed, fetch } = useTagPosts(tag)

    if (!feed) return <></>

    return (
        <PostCardFeed
            feed={feed}
            getNextPage={fetch}
        />
    )
}

export default TagPosts

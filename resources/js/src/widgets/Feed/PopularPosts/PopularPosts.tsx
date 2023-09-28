import PostFeed from '../PostFeed'
import usePopularPosts from '@/features/Feed/hook/usePopularPosts'
import { Container } from './PopularPosts.styles'

const PopularPosts = () => {
    const { feed, fetch } = usePopularPosts()

    if (!feed) return <></>

    return (
        <Container>
            <PostFeed
                feed={feed}
                getNextPage={fetch}
            />
        </Container>
    )
}

export default PopularPosts

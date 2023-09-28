import { useFeedStore } from '@/entities/Feed/model'
import { usePostStore } from '@/entities/Post/model'
import { useUserStore } from '@/entities/User/model'
import { FeedResponsePosts } from '@/shared/api/models/Feed/FeedResponse'

const useFeedPosts = (key: string) => {
    const addPostsToFeed = useFeedStore((state) => state.addItems)
    const addPostToPostStore = usePostStore((state) => state.addPost)
    const setFeedHasNextPage = useFeedStore((state) => state.setFeedHasNextPage)
    const setFeedTotal = useFeedStore((state) => state.setFeedTotal)
    const addUserToStore = useUserStore((state) => state.addUser)

    const handler = (feedResponse: FeedResponsePosts) => {
        addPostsToFeed(key, feedResponse.result.map(item => item.id))

        feedResponse.result.forEach(post => {
            addPostToPostStore(post)
            addUserToStore(post.author)
        })

        setFeedTotal(key, feedResponse.total)

        if (!feedResponse.hasNextPage) {
            setFeedHasNextPage(key, false)
        }
    }

    return {
        handler
    }
}

export default useFeedPosts

import useFeedPosts from './useFeedPosts'
import getOrCreateFeed from '@/entities/Feed/hooks/getOrCreateFeed'
import { feedApi } from '@/entities/Feed/api'
import { DEFAULT_FEED_LIMIT_VALUE } from '@/features/Feed/config'

const useTagPosts = (tag: string) => {
    const key = `${tag} posts`
    const feed = getOrCreateFeed(key)
    const { handler } = useFeedPosts(key)

    const fetch = async () => {
        const res = await feedApi.getTagPosts(tag, { offset: feed ? feed.items.length : 0, limit: DEFAULT_FEED_LIMIT_VALUE })
        const data = res.data

        if (data.success) {
            handler(data.data)
        }
    }

    return {
        feed,
        fetch
    }
}

export default useTagPosts

import { DEFAULT_FEED_LIMIT_VALUE } from '../config'
import useFeedPosts from './useFeedPosts'
import { feedApi } from '@/entities/Feed/api'
import getOrCreateFeed from '@/entities/Feed/hooks/getOrCreateFeed'

const usePopularPosts = () => {
    const key = 'popular posts'
    const feed = getOrCreateFeed(key)
    const { handler } = useFeedPosts(key)

    const fetch = async () => {
        const config = {
            offset: feed ? feed.items.length : 0,
            limit: DEFAULT_FEED_LIMIT_VALUE
        }
        const res = await feedApi.getPopularPosts(config)
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

export default usePopularPosts

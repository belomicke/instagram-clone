import getOrCreateFeed from '@/entities/Feed/hooks/getOrCreateFeed'
import useFeedPosts from './useFeedPosts'
import { feedApi } from '@/entities/Feed/api'
import { DEFAULT_FEED_LIMIT_VALUE } from '../config'

const useSavedPosts = () => {
    const key = 'saved posts'
    const feed = getOrCreateFeed(key)
    const { handler } = useFeedPosts(key)

    const fetch = async () => {
        const res = await feedApi.getSavedPosts({ offset: feed ? feed.items.length : 0, limit: DEFAULT_FEED_LIMIT_VALUE })
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

export default useSavedPosts

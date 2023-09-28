import { useFeedStore } from '../model'

const getOrCreateFeed = (key: string) => {
    const createFeed = useFeedStore((state) => state.createFeed)
    const feed = useFeedStore((state) => state.feeds.find(feed => feed.key === key))

    if (!feed) {
        createFeed(key)
    }

    return feed
}

export default getOrCreateFeed

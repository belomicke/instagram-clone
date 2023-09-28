import { DEFAULT_USER_FEED_LIMIT_VALUE } from '../config'
import { feedApi } from '@/entities/Feed/api'
import getOrCreateFeed from '@/entities/Feed/hooks/getOrCreateFeed'
import { useFeedStore } from '@/entities/Feed/model'
import { useUserStore } from '@/entities/User/model'

const useUserFollowers = (username: string) => {
    const feed = getOrCreateFeed(`user ${username} followers`)
    const addUsersToFeed = useFeedStore((state) => state.addItems)
    const setFeedHasNextPage = useFeedStore((state) => state.setFeedHasNextPage)
    const setFeedTotal = useFeedStore((state) => state.setFeedTotal)
    const addUserToStore = useUserStore((state) => state.addUser)

    const fetch = async () => {
        const config = {
            offset: feed ? feed.items.length : 0,
            limit: DEFAULT_USER_FEED_LIMIT_VALUE
        }
        const res = await feedApi.getUserFollowers(username, config)
        const data = res.data

        if (data.success) {
            addUsersToFeed(`user ${username} followers`, data.data.result.map(user => user.id))

            data.data.result.forEach((user) => [
                addUserToStore(user)
            ])

            setFeedTotal(`user ${username} followers`, data.data.total)

            if (!data.data.hasNextPage) {
                setFeedHasNextPage(`user ${username} followers`, false)
            }
        }
    }

    return {
        feed,
        fetch
    }
}

export default useUserFollowers

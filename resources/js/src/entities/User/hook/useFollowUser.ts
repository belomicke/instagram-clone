import { useEffect, useState } from 'react'
import { userApi } from '@/entities/User/api'
import { useUserStore } from '@/entities/User/model'
import useUserById from '@/entities/User/hook/useUserById'

const useFollowUser = (id: string, onSuccess?: () => void) => {
    const { data: user } = useUserById(id)

    const [isFollow, setIsFollow] = useState<boolean>(user.is_follow)
    const [timeout, setVoteTimeout] = useState<number>()

    const follow = useUserStore((state) => state.follow)
    const unfollow = useUserStore((state) => state.unfollow)

    const incrementFollowersCount = useUserStore((state) => state.incrementFollowersCount)
    const decrementFollowersCount = useUserStore((state) => state.decrementFollowersCount)

    const followHandler = () => {
        if (!isFollow) {
            incrementFollowersCount(user.username)
        } else {
            decrementFollowersCount(user.username)
        }

        setIsFollow(!isFollow)
    }

    const debounce = (status: boolean) => {
        clearTimeout(timeout)
        setVoteTimeout(setTimeout(() => {
            if (status === user.is_follow) {
                return
            }

            if (status) {
                follow(user.username)
                userApi.follow(user.username)
            } else {
                unfollow(user.username)
                userApi.unfollow(user.username)
            }

            onSuccess()
        }, 300))
    }

    useEffect(() => {
        debounce(isFollow)
    }, [isFollow])

    return {
        status: user.is_follow,
        mutate: followHandler
    }
}

export default useFollowUser

import UserFeedModal from '@/features/Feed/ui/UserFeedModal'
import useUserFollowers from '@/features/Feed/hook/useUserFollowers'
import User from '@/shared/api/models/User/User'

interface props {
    user: User
    isActive: boolean
    close: () => void
}

const UserFollowersFeedModal = ({ user, isActive, close }: props) => {
    const { fetch } = useUserFollowers(user.username)

    return (
        <UserFeedModal
            isActive={isActive}
            title='Подписчики'
            feedKey={`user ${user.username} followers`}
            getNextPage={() => fetch()}
            close={() => close()}
        />
    )
}

export default UserFollowersFeedModal

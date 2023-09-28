import UserFeedModal from '@/features/Feed/ui/UserFeedModal'
import useUserFollows from '@/features/Feed/hook/useUserFollows'
import User from '@/shared/api/models/User/User'

interface props {
    user: User
    isActive: boolean
    close: () => void
}

const UserFollowsFeedModal = ({ user, isActive, close }: props) => {
    const { fetch } = useUserFollows(user.username)

    return (
        <UserFeedModal
            isActive={isActive}
            title='Подписки'
            feedKey={`user ${user.username} follows`}
            getNextPage={() => fetch()}
            close={() => close()}
        />
    )
}

export default UserFollowsFeedModal

import useFollowUser from '@/entities/User/hook/useFollowUser'
import User from '@/shared/api/models/User/User'
import TheButton from '@/shared/ui/TheButton'

interface props {
    user: User
}

const UserFollowButton = ({ user }: props) => {
    const { mutate: followHandler } = useFollowUser(user.id)

    return (
        <TheButton
            variant={user.is_follow ? 'info' : 'success'}
            text={user.is_follow ? 'Отменить подписку' : 'Подписаться'}
            onClick={() => followHandler()}
        />
    )
}

export default UserFollowButton

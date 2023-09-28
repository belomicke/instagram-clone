import useFollowUser from '@/entities/User/hook/useFollowUser'
import User from '@/shared/api/models/User/User'
import TheButton from '@/shared/ui/TheButton'

interface props {
    user: User
}

const PostHeaderFollowButton = ({ user }: props) => {
    const { status: isFollow, mutate: followHandler } = useFollowUser(user.id)

    if (isFollow) return <></>

    return (
        <>
            •
            <TheButton
                text="Подписаться"
                onClick={() => followHandler()}
                link
            />
        </>
    )
}

export default PostHeaderFollowButton

import usePostLikers from '@/features/Feed/hook/usePostLikers'
import UserFeedModal from '@/features/Feed/ui/UserFeedModal'

interface props {
    id: string
    isActive: boolean
    close: () => void
}

const PostLikersModal = ({ id, isActive, close }: props) => {
    const { fetch } = usePostLikers(id)

    return (
        <UserFeedModal
            isActive={isActive}
            title='Отметки "Нравится"'
            feedKey={`post ${id} likers`}
            getNextPage={() => fetch()}
            close={() => close()}
        />
    )
}

export default PostLikersModal

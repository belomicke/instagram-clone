import { useParams } from 'react-router-dom'
import useUserPosts from '@/features/Feed/hook/useUserPosts'
import PostCardFeed from '@/features/Feed/ui/PostCardFeed'
import EmptyFeed from '@/entities/Feed/ui/EmptyFeed'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import CameraImageIcon from '@/shared/ui/ImageIcon/CameraImageIcon'

const UserPosts = () => {
    const params = useParams()
    const username = params.username
    const { data: currentUser } = useCurrentUser()
    const { feed, fetch } = useUserPosts(username)

    if (!feed) return <></>

    return (
        <PostCardFeed
            feed={feed}
            getNextPage={fetch}
        >
            <EmptyFeed
                icon={<CameraImageIcon />}
                title={currentUser.username === username ? 'Поделиться фото' : 'Публикаций пока нет'}
                subtitle={currentUser.username === username ? 'Фото, которыми вы делитесь, будут показываться в вашем профиле.' : ''}
            />
        </PostCardFeed>
    )
}

export default UserPosts

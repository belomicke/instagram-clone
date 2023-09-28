import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useFollowUser from '@/entities/User/hook/useFollowUser'
import Post from '@/shared/api/models/Post/Post'
import setClipboard from '@/shared/lib/helpers/setClipboard'
import TheMenu from '@/shared/ui/TheMenu'

interface props {
    post: Post
    close: () => void
}

const OtherUserPostOptions = ({ post, close }: props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const { status: isFollow, mutate: followHandler } = useFollowUser(post.user_id, () => close())

    const copyLink = () => {
        setClipboard(`http://localhost/post/${post.id}`)
        close()
    }

    const options = useMemo(() => {
        const result = [
            {
                label: isFollow ? 'Отписаться' : 'Подписаться',
                onClick: () => followHandler()
            },
            {
                label: 'Копировать ссылку',
                onClick: () => copyLink()
            },
            {
                label: 'Отмена',
                onClick: () => close()
            }
        ]

        if (location.pathname !== `/post/${post.id}`) {
            result.unshift({
                label: 'Перейти к публикации',
                onClick: () => navigate(`/post/${post.id}`)
            })
        }

        return result
    }, [location.pathname, isFollow])

    return (
        <TheMenu
            options={options}
        />
    )
}

export default OtherUserPostOptions

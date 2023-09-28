import Media from '../Media'
import User from '../User/User'

export default interface Post {
    id: string
    description: string
    like_count: number
    comment_count: number
    media_count: number
    is_liked: boolean
    is_saved: boolean
    like_count_is_hidden: boolean
    user_id: string

    author: User
    media: Media[]

    created_at: string
}

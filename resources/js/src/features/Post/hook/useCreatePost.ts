import { postApi } from '@/entities/Post/api'
import { usePostStore } from '@/entities/Post/model'
import { useFeedStore } from '@/entities/Feed/model'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import CreatePostDto from '@/shared/api/models/Post/CreatePostDto'

const useCreatePost = () => {
    const { data: currentUser } = useCurrentUser()
    const addPostToStartOfFeed = useFeedStore((state) => state.addItemToStartOfFeed)
    const currentUserPostsFeed = useFeedStore((state) => state.feeds.find(feed => feed.key === `${currentUser.username} posts`))
    const popularPostsFeed = useFeedStore((state) => state.feeds.find(feed => feed.key === 'popular posts'))
    const addPostToPostStore = usePostStore((state) => state.addPost)

    const mutate = async (dto: CreatePostDto) => {
        const res = await postApi.createPost(dto)
        const data = res.data

        if (data.success) {
            addPostToPostStore(data.data)

            if (currentUserPostsFeed) {
                addPostToStartOfFeed(`${currentUser.username} posts`, data.data.id)
            }

            if (popularPostsFeed) {
                addPostToStartOfFeed('popular posts', data.data.id)
            }

            return data.success
        }
    }

    return {
        mutate
    }
}

export default useCreatePost

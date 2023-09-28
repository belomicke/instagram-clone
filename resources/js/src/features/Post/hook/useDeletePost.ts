import { postApi } from '@/entities/Post/api'
import { usePostStore } from '@/entities/Post/model'
import { useFeedStore } from '@/entities/Feed/model'

const useDeletePost = (id: string) => {
    const deletePost = usePostStore((state) => state.deletePost)
    const deletePostFromAllFeeds = useFeedStore((state) => state.removeItemFromAllFeeds)

    const mutate = async () => {
        const res = await postApi.deletePost(id)
        const data = res.data

        if (data.success) {
            deletePost(id)
            deletePostFromAllFeeds(id)
        }
    }

    return {
        mutate
    }
}

export default useDeletePost

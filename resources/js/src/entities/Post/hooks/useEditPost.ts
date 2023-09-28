import { postApi } from '@/entities/Post/api'
import { usePostStore } from '@/entities/Post/model'

const useEditPost = (id: string) => {
    const editPost = usePostStore((state) => state.editPost)

    const mutate = async (description: string) => {
        const res = await postApi.editPost(id, description)
        const data = res.data

        if (data.success) {
            editPost(id, description)
        }
    }

    return {
        mutate
    }
}

export default useEditPost

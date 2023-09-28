import { postApi } from '../api'
import { usePostStore } from '../model'

const useShowLikeCount = (id: string) => {
    const showLikeCount = usePostStore((state) => state.showLikeCount)

    const mutate = async () => {
        const res = await postApi.showLikeCount(id)
        const data = res.data

        if (data.success) {
            showLikeCount(id)
        }
    }

    return {
        mutate
    }
}

export default useShowLikeCount

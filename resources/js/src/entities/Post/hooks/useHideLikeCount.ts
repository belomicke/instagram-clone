import { postApi } from '../api'
import { usePostStore } from '../model'

const useHideLikeCount = (id: string) => {
    const hideLikeCount = usePostStore((state) => state.hideLikeCount)

    const mutate = async () => {
        const res = await postApi.hideLikeCount(id)
        const data = res.data

        if (data.success) {
            hideLikeCount(id)
        }
    }

    return {
        mutate
    }
}

export default useHideLikeCount

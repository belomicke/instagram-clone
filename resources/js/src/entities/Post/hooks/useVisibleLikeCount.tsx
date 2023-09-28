import { usePostStore } from '../model'
import useHideLikeCount from './useHideLikeCount'
import useShowLikeCount from './useShowLikeCount'

const useVisibleLikeCount = (id: string) => {
    const post = usePostStore((state) => state.posts.find(item => item.id === id))

    const { mutate: show } = useShowLikeCount(id)
    const { mutate: hide } = useHideLikeCount(id)

    const toggleLikeCountVisibility = () => {
        if (post.like_count_is_hidden) {
            show()
        } else {
            hide()
        }
    }

    return {
        toggleLikeCountVisibility
    }
}

export default useVisibleLikeCount

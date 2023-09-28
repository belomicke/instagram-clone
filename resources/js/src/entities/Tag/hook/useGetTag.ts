import { tagApi } from '../api'
import { useTagStore } from '../model'

const useGetTag = (tag: string) => {
    const data = useTagStore((state) => state.tags.find(item => item.tag === tag))
    const addTagToStore = useTagStore((state) => state.addTag)

    const fetch = async () => {
        const res = await tagApi.getTag(tag)
        const data = res.data

        if (data.success) {
            addTagToStore(data.data)
        }
    }

    return {
        data,
        fetch
    }
}

export default useGetTag

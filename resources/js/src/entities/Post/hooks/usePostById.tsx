import { useEffect } from 'react'
import { postApi } from '../api'
import { usePostStore } from '../model'

const usePostById = (id: string) => {
    const post = usePostStore((state) => state.posts.find(item => item.id === id))
    const addPostToPostStore = usePostStore((state) => state.addPost)

    useEffect(() => {
        if (!post && id.length) fetch()
    }, [id, post])

    const fetch = async () => {
        const res = await postApi.getPostById(id)
        const data = res.data

        if (data.success) {
            addPostToPostStore(data.data)
        }
    }

    return {
        data: post,
        fetch
    }
}

export default usePostById

import axios from 'axios'
import CreatePostDto from '@/shared/api/models/Post/CreatePostDto'
import Post from '@/shared/api/models/Post/Post'
import { Response } from '@/shared/api/types/Response'

const getPostById = async (id: string): Promise<Response<Post>> => {
    return await axios.get(`/post/${id}`)
}

const like = async (id: string) => {
    return await axios.post(`/post/${id}/like`)
}

const unlike = async (id: string) => {
    return await axios.post(`/post/${id}/unlike`)
}

const addToSaved = async (id: string) => {
    return await axios.post(`/post/${id}/saved/add`)
}

const removeFromSaved = async (id: string) => {
    return await axios.post(`/post/${id}/saved/remove`)
}

const createPost = async (data: CreatePostDto) => {
    const form = new FormData()

    form.append('description', data.description)
    form.append('like_count_is_hidden', data.like_count_is_hidden ? 'true' : 'false')

    data.images.forEach(image => {
        form.append('images[]', image)
    })

    return await axios.post('posts/create', form)
}

const hideLikeCount = async (id: string) => {
    return await axios.post(`/post/${id}/like_count/hide`)
}

const showLikeCount = async (id: string) => {
    return await axios.post(`/post/${id}/like_count/show`)
}

const deletePost = async (id: string) => {
    return await axios.delete(`/post/${id}`)
}

const editPost = async (id: string, description: string) => {
    return await axios.post(`/post/${id}/edit`, { description })
}

export const postApi = {
    getPostById,

    createPost,
    deletePost,
    editPost,

    like,
    unlike,

    addToSaved,
    removeFromSaved,

    hideLikeCount,
    showLikeCount,
}

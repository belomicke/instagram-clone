import axios from 'axios'

const getPostImages = async (id: string) => {
    return await axios.get(`/post/${id}/images`)
}

export const mediaApi = {
    getPostImages
}

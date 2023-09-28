import axios from 'axios'
import Tag from '@/shared/api/models/Tag'
import { Response } from '@/shared/api/types/Response'

const getTag = async (tag: string): Promise<Response<Tag>> => {
    return await axios.get(`/tag/${tag}`)
}

export const tagApi = {
    getTag
}

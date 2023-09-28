import axios from 'axios'
import { Response } from '@/shared/api/types/Response'
import User from '@/shared/api/models/User/User'

const getUserByUsername = async (username: string): Promise<Response<User>> => {
    return await axios.get(`/user/${username}`)
}

const getUserById = async (id: string) => {
    return await axios.get(`/user/id/${id}`)
}

const follow = async (username: string) => {
    return await axios.post(`/user/${username}/follow`)
}

const unfollow = async (username: string) => {
    return await axios.post(`/user/${username}/unfollow`)
}

export const userApi = {
    getUserByUsername,
    getUserById,

    follow,
    unfollow
}

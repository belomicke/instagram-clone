import axios, { AxiosResponse } from 'axios'
import { Response, ResponseWithoutData } from '@/shared/api/types/Response'
import EditUserDto from '@/shared/api/models/User/EditUserDto'
import LoginDto from '@/shared/api/models/Auth/LoginDto'
import CreateUserDto from '@/shared/api/models/Auth/CreateUserDto'
import User from '@/shared/api/models/User/User'

const getCurrentUser = async (): Promise<AxiosResponse<User>> => {
    return await axios.get('/current_user')
}

const login = async (data: LoginDto): Promise<Response<{ token?: string, message?: string }>> => {
    return await axios.post('/login', data)
}

const logout = async (): Promise<ResponseWithoutData> => {
    return await axios.delete('/logout')
}

const signup = async (data: CreateUserDto): Promise<ResponseWithoutData> => {
    return await axios.post('/signup', data)
}

const editCurrentUser = async (data: EditUserDto) => {
    return await axios.post('auth/edit', data)
}

const deleteAvatar = async () => {
    return await axios.delete('auth/avatar')
}

const changeAvatar = async (file: File) => {
    const data = new FormData()

    data.append('avatar', file)

    return await axios.post('auth/avatar', data)
}

export const authApi = {
    login,
    logout,
    signup,
    deleteAvatar,
    changeAvatar,
    getCurrentUser,
    editCurrentUser,
}

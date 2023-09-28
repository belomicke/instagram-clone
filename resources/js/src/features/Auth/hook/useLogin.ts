import { authApi } from '@/entities/Auth/api'
import LoginDto from '@/shared/api/models/Auth/LoginDto'

const useLogin = () => {
    const mutate = async (dto: LoginDto) => {
        const res = await authApi.login(dto)
        const data = res.data

        if (data.success) {
            localStorage.setItem('token', data.data.token)
            window.location.reload()
        }

        return data
    }

    return {
        mutate
    }
}

export default useLogin

import { useNavigate } from 'react-router-dom'
import { authApi } from '@/entities/Auth/api'
import CreateUserDto from '@/shared/api/models/Auth/CreateUserDto'

const useSignUp = () => {
    const navigate = useNavigate()

    const mutate = async (dto: CreateUserDto) => {
        const res = await authApi.signup(dto)
        const data = res.data

        if (data.success) {
            navigate('/login')
        }
    }

    return {
        mutate
    }
}

export default useSignUp

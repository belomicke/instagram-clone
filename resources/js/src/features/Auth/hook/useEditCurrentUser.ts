import { authApi } from '@/entities/Auth/api'
import { useAuthStore } from '@/entities/Auth/model'
import { useUserStore } from '@/entities/User/model'
import EditUserDto from '@/shared/api/models/User/EditUserDto'

const useEditCurrentUser = () => {
    const setCurrentUser = useAuthStore((state) => state.setUser)
    const setUserInUserStore = useUserStore((state) => state.changeUser)

    const mutate = async (dto: EditUserDto) => {
        const res = await authApi.editCurrentUser(dto)
        const data = res.data

        if (data.success) {
            setCurrentUser(data.data)
            localStorage.setItem('user', JSON.stringify(data.data))
            setUserInUserStore(data.data.id, data.data)
        }
    }

    return {
        mutate
    }
}

export default useEditCurrentUser

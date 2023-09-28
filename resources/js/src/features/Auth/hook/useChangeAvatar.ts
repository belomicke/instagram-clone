import { authApi } from '@/entities/Auth/api'
import { useAuthStore } from '@/entities/Auth/model'
import useUserById from '@/entities/User/hook/useUserById'
import { useUserStore } from '@/entities/User/model'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'

const useChangeAvatar = () => {
    const { data: currentUser } = useCurrentUser()
    const changeAvatar = useAuthStore((state) => state.changeAvatar)
    const { data: user } = useUserById(currentUser.id)
    const change = useUserStore((state) => state.changeUser)

    const mutate = async (file: File) => {
        if (file.size > 200000) {
            return 'Размер файла превышает допустимое значение.'
        }

        const res = await authApi.changeAvatar(file)
        const data = res.data

        if (data.success) {
            changeAvatar(data.data.avatar_url)
            change(currentUser.id, { ...user, avatar: String(data.data.avatar_url) })
        }
    }

    return {
        mutate
    }
}

export default useChangeAvatar

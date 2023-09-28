import { authApi } from '@/entities/Auth/api'
import { useAuthStore } from '@/entities/Auth/model'
import useUserById from '@/entities/User/hook/useUserById'
import { useUserStore } from '@/entities/User/model'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'

const useDeleteAvatar = () => {
    const { data: currentUser } = useCurrentUser()
    const deleteAvatar = useAuthStore((state) => state.deleteAvatar)
    const { data: user } = useUserById(currentUser.id)
    const changeUser = useUserStore((state) => state.changeUser)

    const mutate = async () => {
        const res = await authApi.deleteAvatar()
        const data = res.data

        if (data.success) {
            deleteAvatar()

            changeUser(currentUser.id, { ...user, avatar: 'http://localhost/storage/static/default_avatar.png'  })
        }
    }

    return {
        mutate
    }
}

export default useDeleteAvatar

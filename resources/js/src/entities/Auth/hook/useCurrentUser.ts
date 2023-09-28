import { authApi } from '../api'
import { useAuthStore } from '../model'

const useCurrentUser = () => {
    const currentUser = useAuthStore((state) => state.user)
    const setUser = useAuthStore((state) => state.setUser)
    const setIsAuth = useAuthStore((state) => state.setIsAuth)

    const fetch = async () => {
        try {
            const res = await authApi.getCurrentUser()
            const data = res.data

            if (data) {
                setUser(data)
                setIsAuth(true)
                localStorage.setItem('user', JSON.stringify(data))

                return data
            }
        } catch (e) {
            if (e.response.status === 401) {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                setIsAuth(false)
            }
        }
    }

    return {
        data: currentUser,
        fetch
    }
}

export default useCurrentUser

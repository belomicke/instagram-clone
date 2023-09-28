import { authApi } from '@/entities/Auth/api'

const useLogout = () => {
    const mutate = async () => {
        const res = await authApi.logout()
        const data = res.data

        if (data.success) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.reload()
        }
    }

    return {
        mutate
    }
}

export default useLogout

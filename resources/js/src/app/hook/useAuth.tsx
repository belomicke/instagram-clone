import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthUserRouter, GuestUserRouter } from '@/pages'
import { useAuthStore } from '@/entities/Auth/model'
import { useUserStore } from '@/entities/User/model'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'

const useAuth = () => {
    const isAuth = useAuthStore((state) => state.isAuth)
    const addUserToStore = useUserStore((state) => state.addUser)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { fetch: getCurrentUser } = useCurrentUser()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async (): Promise<void> => {
        const user = await getCurrentUser()

        addUserToStore(user)
        setIsLoading(false)
    }

    return {
        isAuth,
        isLoading,
    }
}

export default useAuth

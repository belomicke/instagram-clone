import { useEffect } from 'react'
import { userApi } from '../api'
import { useUserStore } from '../model'

const useUserByUsername = (username: string) => {
    const user = useUserStore((state) => state.users.find(item => item.username === username))
    const addUserToUserStore = useUserStore((state) => state.addUser)

    useEffect(() => {
        if (!user) fetch()
    }, [username, user])

    const fetch = async () => {
        const res = await userApi.getUserByUsername(username)
        const data = res.data

        if (data.success) {
            addUserToUserStore(data.data)
        }
    }

    return {
        data: user
    }
}

export default useUserByUsername

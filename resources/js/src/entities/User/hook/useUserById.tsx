import { useEffect } from 'react'
import { userApi } from '../api'
import { useUserStore } from '../model'

const useUserById = (id: string) => {
    const user = useUserStore((state) => state.users.find(item => item.id === id))
    const addUserToUserStore = useUserStore((state) => state.addUser)

    useEffect(() => {
        if (!user && id.length) fetch()
    }, [id, user])

    const fetch = async () => {
        const res = await userApi.getUserById(id)
        const data = res.data

        if (data.success) {
            addUserToUserStore(data.data)
        }
    }

    return {
        data: user,
        fetch
    }
}

export default useUserById

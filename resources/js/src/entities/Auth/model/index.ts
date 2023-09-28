import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import User from '@/shared/api/models/User/User'

type State = {
    user: User | undefined
    isAuth: boolean
}

type Actions = {
    setUser: (user: User) => void
    setIsAuth: (value: boolean) => void
    deleteAvatar: () => void
    changeAvatar: (avatarUrl: string) => void
}

export const useAuthStore = create(
    immer<State & Actions>((set) => ({
        user: JSON.parse(localStorage.getItem('user')) ?? undefined,
        isAuth: Boolean(localStorage.getItem('token')) ?? false,
        setUser: (user: User) => {
            set((state) => {
                state.user = user
            })
        },
        setIsAuth: (value: boolean) => {
            set((state) => {
                state.isAuth = value
            })
        },
        deleteAvatar: () => {
            set((state) => {
                state.user.avatar = 'http://localhost/storage/static/default_avatar.png'
                localStorage.setItem('user', JSON.stringify(state.user))
            })
        },
        changeAvatar: (avatarUrl: string) => {
            set((state) => {
                state.user.avatar = avatarUrl
                localStorage.setItem('user', JSON.stringify(state.user))
            })
        },
    }))
)

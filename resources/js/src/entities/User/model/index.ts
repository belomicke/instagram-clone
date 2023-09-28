import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import User from '@/shared/api/models/User/User'

type State = {
    users: User[]
}

type Actions = {
    addUser: (user: User) => void
    changeUser: (id: string, user: User) => void

    follow: (username: string) => void
    unfollow: (username: string) => void

    incrementFollowersCount: (username: string) => void
    decrementFollowersCount: (username: string) => void
}

export const useUserStore = create(
    immer<State & Actions>((set) => ({
        users: [],
        addUser: (user: User) => {
            set((state) => {
                state.users.push(user)
            })
        },
        changeUser: (id: string, user: User) => {
            set((state) => {
                const foundedUser = state.users.find(item => item.id === id)

                foundedUser.id = user.id
                foundedUser.avatar = user.avatar
                foundedUser.name = user.name
                foundedUser.username = user.username
                foundedUser.biography = user.biography
            })
        },
        follow: (username: string) => {
            set((state) => {
                const user = state.users.find(item => item.username === username)

                user.is_follow = true
            })
        },
        unfollow: (username: string) => {
            set((state) => {
                const user = state.users.find(item => item.username === username)

                user.is_follow = false
            })
        },
        incrementFollowersCount: (username: string) => {
            set((state) => {
                const user = state.users.find(item => item.username === username)

                user.followers_count++
            })
        },
        decrementFollowersCount: (username: string) => {
            set((state) => {
                const user = state.users.find(item => item.username === username)

                user.followers_count--
            })
        }
    }))
)

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
    alert: string
}

type Actions = {
    setAlert: (value: string) => void
    clearAlert: () => void
}

export const useAppStore = create(
    immer<State & Actions>((set) => ({
        alert: '',
        setAlert: (value: string) => {
            set((state) => {
                state.alert = value
            })
        },
        clearAlert: () => {
            set((state) => {
                state.alert = ''
            })
        }
    }))
)

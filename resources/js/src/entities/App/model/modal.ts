import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
    modalCount: number
}

type Actions = {
    incrementModalCount: () => void
    decrementModalCount: () => void
}

export const useModalStore = create(
    immer<State & Actions>((set) => ({
        modalCount: 0,
        incrementModalCount: () => {
            set((state) => {
                state.modalCount++
            })
        },
        decrementModalCount: () => {
            set((state) => {
                state.modalCount--
            })
        }
    }))
)

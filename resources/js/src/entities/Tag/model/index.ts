import { create } from 'zustand'
import Tag from '@/shared/api/models/Tag'
import { immer } from 'zustand/middleware/immer'

type State = {
    tags: Tag[]
}

type Actions = {
    addTag: (tag: Tag) => void
}


export const useTagStore = create(
    immer<State & Actions>((set) => ({
        tags: [],
        addTag: (tag: Tag) => {
            set((state) => {
                if (!state.tags.find(item => item.tag === tag.tag)) {
                    state.tags.push(tag)
                }
            })
        }
    }))
)

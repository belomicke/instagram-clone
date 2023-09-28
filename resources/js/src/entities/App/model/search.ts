import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface SearchResultItem {
    cover: string
    title: string
}

interface SearchResult {
    query: string
    items: SearchResultItem[]
}

type State = {
    search_results: SearchResult[]
}

type Actions = {
    addSearchResult: (query: string, value: SearchResultItem[]) => void
}

export const useSearchStore = create(
    immer<State & Actions>((set) => ({
        search_results: [],
        addSearchResult: (query: string, items: SearchResultItem[]) => {
            set((state) => {
                state.search_results.push({
                    query,
                    items
                })
            })
        },
    }))
)

import axios from 'axios'
import { useEffect } from 'react'
import { useSearchStore } from '../model/search'

const useSearch = (query: string) => {
    const searchResult = useSearchStore((state) => state.search_results.find(item => item.query === query))
    const searchResults = useSearchStore((state) => state.search_results)
    const addSearchResult = useSearchStore((state) => state.addSearchResult)

    useEffect(() => {
        const searchResult = searchResults.find(item => item.query === query)

        if (!searchResult && query.length) fetch(query)
    }, [query])

    const fetch = async (query: string) => {
        const res = await axios.get('/search', { params: { query } })
        const data = res.data

        if (data.success) {
            const result = data.data.map(item => ({ cover: item.avatar, title: item.username }))
            addSearchResult(query, result)
        }
    }

    return {
        data: searchResult,
        fetch
    }
}

export default useSearch

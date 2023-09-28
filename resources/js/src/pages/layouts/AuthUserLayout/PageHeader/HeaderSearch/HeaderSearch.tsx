import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchResult from './SearchResult'
import useSearch from '@/entities/App/hook/useSearch'
import CrossImageIcon from '@/shared/ui/ImageIcon/CrossImageIcon'
import {
    Container,
    IconContainer,
    Input,
    SearchResultContainer,
} from './HeaderSearch.styles'

const HeaderSearch = () => {
    const location = useLocation()
    const container = useRef<HTMLDivElement>(null)
    const [query, setQuery] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { data } = useSearch(query)
    const closeSearchResultDropdown = (e) => {
        const target = e.target

        if (!container.current.contains(target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    useEffect(() => {
        if (!isOpen) setQuery('')
    }, [isOpen])

    useEffect(() => {
        window.addEventListener('click', closeSearchResultDropdown)

        return () => {
            window.removeEventListener('click', closeSearchResultDropdown)
        }
    }, [])

    return (
        <Container ref={container}>
            <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsOpen(true)}
                placeholder="Поиск"
            />
            {query.length > 0 &&
                <IconContainer onClick={() => setQuery('')}>
                    <CrossImageIcon />
                </IconContainer>
            }
            {isOpen && query !== '' &&
                <SearchResultContainer>
                    <SearchResult items={data ? data.items : []} />
                </SearchResultContainer>
            }
        </Container>
    )
}

export default HeaderSearch

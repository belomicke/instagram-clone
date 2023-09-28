import { useNavigate } from 'react-router-dom'
import Avatar from '@/shared/ui/Avatar'
import { Container, Username } from '@/entities/User/ui/UserListItem/UserListItem.styles'
import { Empty, Wrapper } from './SearchResult.styles'

interface SearchResultItem {
    cover: string
    title: string
}

interface props {
    items: SearchResultItem[]
}

const SearchResult = ({ items }: props) => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            {items.length > 0 ?
                items.map(item => (
                    <Container
                        onClick={() => navigate(`/user/${item.title}`)}
                        key={item.title}
                    >
                        <Avatar
                            src={item.cover}
                            size={50}
                        />
                        <Username>{item.title}</Username>
                    </Container>
                ))
                :
                <Empty>Ничего не найдено.</Empty>
            }
        </Wrapper>
    )
}

export default SearchResult

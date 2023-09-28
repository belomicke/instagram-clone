import { useLocation, useNavigate } from 'react-router-dom'
import PostCreatorNavBarItem from './PostCreatorNavBarItem'
import HeaderSearch from './HeaderSearch'
import NavBarItem from './NavBarItem'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import HomeIcon from '@/shared/ui/Icon/icons/HomeIcon'
import BookmarkIcon from '@/shared/ui/Icon/icons/BookmarkIcon'
import {
    Container,
    NavBar,
    AvatarWrapper,
    Avatar,
    Wrapper
} from './PageHeader.styles'

const PageHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { data: currentUser } = useCurrentUser()

    return (
        <Wrapper>
            <Container>
                <NavBar>
                    <NavBarItem
                        isActive={location.pathname === ('/')}
                        onClick={() => navigate('/')}
                        icon={
                            <HomeIcon filled={location.pathname === '/'} />
                        }
                    />
                </NavBar>
                <HeaderSearch />
                <NavBar>
                    <PostCreatorNavBarItem />
                    <NavBarItem
                        isActive={location.pathname === '/saved'}
                        onClick={() => navigate('/saved')}
                        icon={
                            <BookmarkIcon filled={location.pathname === '/saved'} />
                        }
                    />
                    <NavBarItem
                        isActive={location.pathname.startsWith(`/${currentUser.username}`)}
                        onClick={() => navigate(`/user/${currentUser.username}`)}
                        icon={
                            <AvatarWrapper active={location.pathname.startsWith(`/${currentUser.username}`)}>
                                <Avatar src={currentUser.avatar} />
                            </AvatarWrapper>
                        }
                    />
                </NavBar>
            </Container>
        </Wrapper>
    )
}

export default PageHeader

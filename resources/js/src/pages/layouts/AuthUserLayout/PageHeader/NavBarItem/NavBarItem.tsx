import { Container } from './NavBarItem.styles'

interface props {
    isActive: boolean
    onClick: () => void
    icon: React.ReactNode
}

const NavBarItem = ({ isActive, onClick, icon }: props) => {
    return (
        <Container
            active={isActive}
            onClick={onClick}
        >
            {icon}
        </Container>
    )
}

export default NavBarItem

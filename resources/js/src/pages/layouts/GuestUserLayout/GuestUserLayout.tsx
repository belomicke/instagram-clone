import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Container } from './GuestUserLayout.styles'


const GuestUserLayout = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const paths = ['/login', '/signup']

        if (!paths.includes(location.pathname)) {
            navigate('/login')
        }
    }, [location.pathname])

    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default GuestUserLayout

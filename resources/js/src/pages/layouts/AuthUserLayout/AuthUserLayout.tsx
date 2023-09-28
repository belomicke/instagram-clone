import { Outlet } from 'react-router-dom'
import PageHeader from './PageHeader'
import PageAlert from './PageAlert'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'

const AuthUserLayout = () => {
    const { data: currentUser } = useCurrentUser()

    if (!currentUser) {
        return <></>
    }

    return (
        <>
            <PageHeader />
            <Outlet />
            <PageAlert />
        </>
    )
}

export default AuthUserLayout

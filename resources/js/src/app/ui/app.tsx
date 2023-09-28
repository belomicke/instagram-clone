import { BrowserRouter } from 'react-router-dom'
import useAuth from '@/app/hook/useAuth'
import { AuthUserRouter, GuestUserRouter } from '@/pages'
import '../styles/global.css'
import '../styles/variables.css'

const App = () => {
    const { isAuth, isLoading } = useAuth()

    if (isLoading) return <></>

    return (
        <BrowserRouter>
            {isAuth ?
                <AuthUserRouter />
                :
                <GuestUserRouter />
            }
        </BrowserRouter>
    )
}

export default App

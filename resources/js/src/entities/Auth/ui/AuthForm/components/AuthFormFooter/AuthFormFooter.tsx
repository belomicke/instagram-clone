import { Footer } from './AuthFormFooter.styles'

interface props {
    children: React.ReactNode
}

const AuthFormFooter = ({ children }: props) => {
    return (
        <Footer>{children}</Footer>
    )
}

export default AuthFormFooter

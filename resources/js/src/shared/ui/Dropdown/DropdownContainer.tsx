import { Container } from './Dropdown.styles'
import { useEffect, useRef } from 'react'

interface props {
    children: React.ReactNode
    close: () => void
}

const DropdownContainer = ({ children, close }: props) => {
    const container = useRef<HTMLDivElement>(null)

    const dropdownCloseHandler = (e) => {
        const element = e.target

        if (!container.current.contains(element)) {
            close()
        }
    }

    useEffect(() => {
        window.addEventListener('click', dropdownCloseHandler)

        return () => {
            window.removeEventListener('click', dropdownCloseHandler)
        }
    }, [])

    return (
        <Container ref={container}>
            {children}
        </Container>
    )
}

export default DropdownContainer

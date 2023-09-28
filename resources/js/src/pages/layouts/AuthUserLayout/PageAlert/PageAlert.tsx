import { useAppStore } from '@/entities/App/model'
import { useEffect, useState } from 'react'
import { Container } from './PageAlert.styles'

const PageAlert = () => {
    const alertMessage = useAppStore((state) => state.alert)
    const clearAlert = useAppStore((state) => state.clearAlert)
    const [alertIsVisible, setAlertIsVisible] = useState<boolean>(false)

    useEffect(() => {
        if (alertMessage.length) {
            setAlertIsVisible(true)
        }
    }, [alertMessage])

    useEffect(() => {
        if (alertIsVisible) {
            setTimeout(() => {
                clearAlert()
                setAlertIsVisible(false)
            }, 5000)
        }
    }, [alertIsVisible])

    if (!alertIsVisible) return <></>

    return (
        <Container>{alertMessage}</Container>
    )
}

export default PageAlert

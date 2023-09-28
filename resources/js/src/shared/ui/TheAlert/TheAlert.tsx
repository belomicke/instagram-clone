import { Alert } from './TheAlert.styles'
import { AlertTypes } from '@/shared/ui/TheAlert/types'

interface props {
    title: string
    type: AlertTypes
}

const TheAlert = ({ title, type = 'success' }: props) => {
    return (
        <Alert type={type}>{title}</Alert>
    )
}

export default TheAlert

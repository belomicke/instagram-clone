import { useNavigate } from 'react-router-dom'
import useLogout from '@/features/Auth/hook/useLogout'
import TheMenu from '@/shared/ui/TheMenu'

interface props {
    close: () => void
}

const CurrentUserSettingsMenu = ({ close }: props) => {
    const navigate = useNavigate()
    const { mutate: logout } = useLogout()

    return (
        <TheMenu
            options={[
                {
                    label: 'Настройки',
                    onClick: () => navigate('/settings')
                },
                {
                    label: 'Выйти',
                    onClick: () => logout()
                },
                {
                    label: 'Отмена',
                    onClick: () => close()
                }
            ]}
        />
    )
}

export default CurrentUserSettingsMenu

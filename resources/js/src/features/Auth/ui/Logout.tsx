import TheButton from '@/shared/ui/TheButton'
import useLogout from '@/features/Auth/hook/useLogout'

const Logout = () => {
    const { mutate: logout } = useLogout()

    return (
        <TheButton
            text="Выйти"
            onClick={() => logout()}
        />
    )
}

export default Logout

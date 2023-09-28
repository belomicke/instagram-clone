import { forwardRef, HTMLAttributes, LegacyRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserById from '../../hook/useUserById'
import Avatar from '@/shared/ui/Avatar'
import { Container, Username } from './UserListItem.styles'

interface props extends HTMLAttributes<HTMLDivElement> {
    id: string
    onClick: () => void
}

type refType = LegacyRef<HTMLDivElement>

const UserListItem = forwardRef<HTMLDivElement, props>(({ id, onClick, ...props }: props, ref: refType) => {
    const { data: user } = useUserById(id)
    const navigate = useNavigate()

    const clickHandler = () => {
        onClick()
        navigate(`/user/${user.username}`)
    }

    return (
        <Container {...props} onClick={() => clickHandler()} ref={ref}>
            <Avatar
                src={user.avatar}
                size={50}
            />
            <Username>{user.username}</Username>
        </Container>
    )
})

UserListItem.displayName = 'UserListItem'

export default UserListItem

import { useState } from 'react'
import DeleteAvatarDialog from '@/features/Auth/ui/DeleteAvatarDialog'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import TheButton from '@/shared/ui/TheButton'

const DeleteAvatarButton = () => {
    const { data: currentUser } = useCurrentUser()
    const [deleteAvatarDialogIsOpen, setDeleteAvatarDialogIsOpen] = useState<boolean>(false)

    const onSuccess = () => {
        setDeleteAvatarDialogIsOpen(false)
    }

    if (currentUser.avatar === 'http://localhost/storage/static/default_avatar.png') return <></>

    return (
        <>
            <TheButton
                text="Удалить аватар"
                variant='danger'
                onClick={() => setDeleteAvatarDialogIsOpen(true)}
            />
            <DeleteAvatarDialog
                isActive={deleteAvatarDialogIsOpen}
                close={() => setDeleteAvatarDialogIsOpen(false)}
                onSuccess={() => onSuccess()}
            />
        </>
    )
}

export default DeleteAvatarButton

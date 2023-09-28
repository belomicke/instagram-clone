import useDeleteAvatar from '@/features/Auth/hook/useDeleteAvatar'
import TheDialog from '@/shared/ui/TheDialog'
import TheModal from '@/shared/ui/TheModal'

interface props {
    isActive: boolean
    close: () => void
    onSuccess: () => void
}

const DeleteAvatarDialog = ({ isActive, close, onSuccess }: props) => {
    const { mutate: deleteAvatar } = useDeleteAvatar()

    const deleteAvatarHandler = async () => {
        await deleteAvatar()
        onSuccess()
    }

    return (
        <TheModal
            isActive={isActive}
            close={() => close()}
        >
            <TheDialog
                closeDialogHandler={() => close()}
                submitButtonText="Удалить"
                submitHandler={() => deleteAvatarHandler()}
                title="Удалить аватар?"
                subtitle="Вы уверены, что хотите удалить аватар?"
            />
        </TheModal>
    )
}

export default DeleteAvatarDialog
